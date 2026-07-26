import os
from PIL import Image

def main():
    directory = 'public/referanslar'
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    w, h = img.size
                    
                    # Force crop 10% from all sides
                    crop_w = int(w * 0.1)
                    crop_h = int(h * 0.1)
                    
                    # So bounding box is (left, top, right, bottom)
                    bbox = (crop_w, crop_h, w - crop_w, h - crop_h)
                    
                    cropped = img.crop(bbox)
                    
                    if filename.lower().endswith('.png'):
                        cropped.save(filepath, "PNG")
                    else:
                        cropped.convert("RGB").save(filepath, "JPEG", quality=95)
                    print(f"Force-cropped 10% from {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    main()
