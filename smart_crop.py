import os
from PIL import Image, ImageChops, ImageFilter

def main():
    directory = 'public/references'
    for filename in os.listdir(directory):
        if filename.lower() == 'logo_siemens.png':
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    original = img.copy()
                    img_rgb = img.convert("RGB")
                    bg = Image.new("RGB", img_rgb.size, (255, 255, 255))
                    
                    diff = ImageChops.difference(img_rgb, bg)
                    diff = diff.convert("L")
                    # Anything not purely white becomes 255 (white) in the mask
                    diff = diff.point(lambda p: 255 if p > 5 else 0)
                    
                    # Erode the mask by applying MinFilter multiple times
                    # This removes thin frames (e.g. 1-4 pixels wide)
                    for _ in range(4):
                        diff = diff.filter(ImageFilter.MinFilter(3))
                        
                    bbox = diff.getbbox()
                    
                    if bbox:
                        pad = 10
                        left = max(0, bbox[0] - pad)
                        top = max(0, bbox[1] - pad)
                        right = min(img.width, bbox[2] + pad)
                        bottom = min(img.height, bbox[3] + pad)
                        
                        cropped = original.crop((left, top, right, bottom))
                        if filename.lower().endswith('.png'):
                            cropped.save(filepath, "PNG")
                        else:
                            cropped.convert("RGB").save(filepath, "JPEG", quality=95)
                        print(f"Smart-cropped {filename}")
                    else:
                        print(f"No bbox found for {filename} after erosion")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    main()
