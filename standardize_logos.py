import os
from PIL import Image

def standardize_image(filepath, out_filepath, target_width=700, target_height=400):
    with Image.open(filepath) as img:
        img = img.convert("RGBA")
        
        # Get bounding box of non-transparent pixels
        # getbbox() works on the alpha channel if we split it
        # Actually getbbox() gets the bounding box of non-zero pixels. 
        # But we need to check only the alpha channel.
        alpha = img.split()[3]
        bbox = alpha.getbbox()
        
        if bbox:
            img = img.crop(bbox)
            
        # Now img is tightly cropped
        orig_w, orig_h = img.size
        
        # Calculate scaling factor to fit within target_width x target_height
        scale_w = target_width / orig_w
        scale_h = target_height / orig_h
        scale = min(scale_w, scale_h)
        
        new_w = int(orig_w * scale)
        new_h = int(orig_h * scale)
        
        # Resize using Lanczos resampling (high quality)
        img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Create a new transparent canvas
        canvas = Image.new("RGBA", (target_width, target_height), (0, 0, 0, 0))
        
        # Paste the resized image into the center of the canvas
        offset_x = (target_width - new_w) // 2
        offset_y = (target_height - new_h) // 2
        
        canvas.paste(img, (offset_x, offset_y), img)
        
        canvas.save(out_filepath, "PNG")
        print(f"Standardized {os.path.basename(filepath)}")

def main():
    input_dir = 'public/references'
    output_dir = 'public/references_std'
    os.makedirs(output_dir, exist_ok=True)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith('.png'):
            filepath = os.path.join(input_dir, filename)
            out_filepath = os.path.join(output_dir, filename)
            standardize_image(filepath, out_filepath, target_width=700, target_height=400)

if __name__ == '__main__':
    main()
