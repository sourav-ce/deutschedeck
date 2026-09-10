import os
from PIL import Image

PHOTOS_DIR = os.path.join(os.path.dirname(__file__), '..', 'Photos')
OPTIMIZED_DIR = os.path.join(PHOTOS_DIR, 'optimized')

os.makedirs(OPTIMIZED_DIR, exist_ok=True)

MAX_WIDTH = 1920
QUALITY = 82

for filename in os.listdir(PHOTOS_DIR):
    if filename == 'optimized':
        continue
    filepath = os.path.join(PHOTOS_DIR, filename)
    if not os.path.isfile(filepath):
        continue
    ext = os.path.splitext(filename)[1].lower()
    if ext not in ('.jpg', '.jpeg', '.png', '.webp'):
        continue

    out_name = os.path.splitext(filename)[0] + '.webp'
    out_path = os.path.join(OPTIMIZED_DIR, out_name)

    try:
        with Image.open(filepath) as img:
            if img.mode in ('RGBA', 'LA'):
                pass
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            w, h = img.size
            if w > MAX_WIDTH:
                new_h = int(h * (MAX_WIDTH / w))
                img = img.resize((MAX_WIDTH, new_h), Image.Resampling.LANCZOS)

            img.save(out_path, 'WEBP', quality=QUALITY, method=6)
            orig_size = os.path.getsize(filepath) / 1024
            opt_size = os.path.getsize(out_path) / 1024
            savings = ((orig_size - opt_size) / orig_size) * 100
            print(f"Optimized {filename}: {orig_size:.0f} KB -> {opt_size:.0f} KB ({savings:.1f}% savings)")
    except Exception as e:
        print(f"Failed to optimize {filename}: {e}")
