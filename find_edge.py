from PIL import Image

im = Image.open('public/references/logo_1.png').convert('RGBA')
alpha = im.split()[-1]
w, h = im.size

def get_real_left():
    for x in range(w):
        count = sum(1 for y in range(h) if alpha.getpixel((x, y)) > 200)
        if count > 5:
            return x
    return 0

def get_real_right():
    for x in range(w-1, -1, -1):
        count = sum(1 for y in range(h) if alpha.getpixel((x, y)) > 200)
        if count > 5:
            return x
    return w

def get_real_top():
    for y in range(h):
        count = sum(1 for x in range(w) if alpha.getpixel((x, y)) > 200)
        if count > 5:
            return y
    return 0

def get_real_bottom():
    for y in range(h-1, -1, -1):
        count = sum(1 for x in range(w) if alpha.getpixel((x, y)) > 200)
        if count > 5:
            return y
    return h

left = get_real_left()
right = get_real_right()
top = get_real_top()
bottom = get_real_bottom()

print(f"Real bbox: {(left, top, right, bottom)}")
im.crop((left, top, right, bottom)).save('public/references/logo_1_cropped.png')
print("Saved to logo_1_cropped.png")
