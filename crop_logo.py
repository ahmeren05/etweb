from PIL import Image
import sys

def crop_logo(filepath):
    with Image.open(filepath) as img:
        img = img.convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            cropped.save(filepath)
            print(f"Cropped {filepath} to {cropped.size}")
        else:
            print(f"No bounding box found for {filepath}")

if __name__ == "__main__":
    crop_logo("public/etlogo.png")
