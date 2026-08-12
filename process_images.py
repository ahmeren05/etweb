import sys
from PIL import Image

def process(filepath):
    try:
        im = Image.open(filepath)
        im = im.convert("RGBA")
        
        # Transparent background for white pixels (fuzziness)
        datas = im.getdata()
        new_data = []
        for item in datas:
            # White threshold
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        im.putdata(new_data)
        
        # Crop transparent space
        bbox = im.getbbox()
        if bbox:
            im = im.crop(bbox)
        
        im.save(filepath)
        print(f"Processed: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for f in sys.argv[1:]:
    process(f)
