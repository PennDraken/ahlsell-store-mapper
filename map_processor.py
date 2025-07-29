import json

# Load the VIA JSON file
with open('via_project_29Jul2025_10h11m (2).json', 'r', encoding='utf-8') as f:
    data = json.load(f)

rectangles = []

# Iterate over image metadata
for image_data in data.get('_via_img_metadata', {}).values():
    for region in image_data.get('regions', []):
        shape = region.get('shape_attributes', {})
        attrs = region.get('region_attributes', {})
        if shape.get('name') == 'rect' and 'Hyllor' in attrs:
            rect = {
                'x': shape['x'],
                'y': shape['y'],
                'width': shape['width'],
                'height': shape['height'],
                'shelfId': attrs['Hyllor']
            }
            rectangles.append(rect)

# Write to a JS file
with open('shelves.js', 'w', encoding='utf-8') as f:
    f.write('const shelves = ')
    json.dump(rectangles, f, indent=4)
    f.write(';')
