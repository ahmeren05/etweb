import os
from PIL import Image, ImageChops

def trim(im):
    # Convert to RGB to ensure compatibility
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        # Some images might have very thin artifacts, so let's pad the crop slightly inwards if needed,
        # but let's just use the strict bbox first.
        return im.crop(bbox)
    return im

def main():
    directory = 'public/referanslar'
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    img = img.convert("RGBA") # or RGB to handle transparency well
                    
                    # Instead of getpixel(0,0), another approach is a fixed crop if it's an artificial border.
                    # Let's check if getbbox trims it well.
                    # Because these are JPGs, compression artifacts might make the border not perfectly uniform.
                    # Let's crop a fixed 10% from all sides, wait, that might crop the logo itself if the border is thin.
                    # Let's use a fuzz-based trim or fixed pixels if known.
                    
                    # Since the user says "4 kenardan kırpıp", let's just assume a white border with some noise.
                    # We can use getbbox with a threshold.
                    
                    bg = Image.new("RGB", img.size, (255, 255, 255))
                    rgb_img = img.convert("RGB")
                    diff = ImageChops.difference(rgb_img, bg)
                    
                    # Threshold diff to ignore small noise
                    diff = diff.point(lambda p: 255 if p > 15 else 0)
                    bbox = diff.getbbox()
                    
                    if bbox:
                        cropped = img.crop(bbox)
                        # Save it back, preserving transparency if PNG
                        if filename.lower().endswith('.png'):
                            cropped.save(filepath, "PNG")
                        else:
                            cropped.convert("RGB").save(filepath, "JPEG", quality=95)
                        print(f"Cropped {filename}")
                    else:
                        print(f"Could not find bounding box for {filename}")
                        
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    main()
