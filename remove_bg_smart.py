import os
from PIL import Image, ImageChops, ImageFilter, ImageDraw

def smart_crop_and_remove_bg(filepath, filename):
    with Image.open(filepath) as img:
        original = img.copy()
        img_rgb = img.convert("RGB")
        bg = Image.new("RGB", img_rgb.size, (255, 255, 255))
        
        diff = ImageChops.difference(img_rgb, bg)
        diff = diff.convert("L")
        diff = diff.point(lambda p: 255 if p > 5 else 0)
        
        # Erode to remove thin frames
        for _ in range(4):
            diff = diff.filter(ImageFilter.MinFilter(3))
            
        bbox = diff.getbbox()
        
        if bbox:
            pad = 5
            left = max(0, bbox[0] - pad)
            top = max(0, bbox[1] - pad)
            right = min(img.width, bbox[2] + pad)
            bottom = min(img.height, bbox[3] + pad)
            
            cropped = original.crop((left, top, right, bottom))
        else:
            cropped = original
            
        # Now convert to RGBA for transparency
        cropped = cropped.convert("RGBA")
        
        # Flood fill from the 4 corners to replace contiguous white with transparent
        # We need a seed color that won't be confused with white.
        # ImageDraw.floodfill works on the image in-place.
        # Let's flood fill with (0,0,0,0) (transparent black).
        # We use a threshold/value for tolerance if needed, but ImageDraw.floodfill has exact match in older PIL,
        # wait, we can just replace exact (255,255,255).
        # JPEGs have compression artifacts, so pure white might be (253,254,255).
        # Floodfill with tolerance requires PIL 10+.
        # A manual BFS or custom floodfill is safer.
        
        width, height = cropped.size
        pixels = cropped.load()
        
        def is_white_ish(c):
            # RGBA
            return c[0] > 240 and c[1] > 240 and c[2] > 240 and c[3] > 0
            
        # Manual BFS Flood fill
        visited = set()
        queue = []
        
        # Add edges to queue
        for x in range(width):
            queue.append((x, 0))
            queue.append((x, height - 1))
        for y in range(height):
            queue.append((0, y))
            queue.append((width - 1, y))
            
        # Filter queue for white-ish pixels
        queue = [p for p in queue if is_white_ish(pixels[p[0], p[1]])]
        for p in queue:
            visited.add(p)
            
        while queue:
            x, y = queue.pop(0)
            pixels[x, y] = (255, 255, 255, 0)
            
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        if is_white_ish(pixels[nx, ny]):
                            queue.append((nx, ny))
                            
        # Save as PNG
        new_filename = os.path.splitext(filename)[0] + ".png"
        new_filepath = os.path.join(os.path.dirname(filepath), new_filename)
        
        cropped.save(new_filepath, "PNG")
        
        # If it was originally a jpg, delete the original jpg
        if filename.lower().endswith(('.jpg', '.jpeg')) and new_filepath != filepath:
            os.remove(filepath)
            
        print(f"Processed {filename} -> {new_filename}")
        return new_filename

def main():
    directory = 'public/references'
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            try:
                smart_crop_and_remove_bg(filepath, filename)
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    main()
