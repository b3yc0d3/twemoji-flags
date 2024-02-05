# Simple script to build Twemoji-Flags CSS utility

import glob, os, base64

IMG_PREFIX = "data:image/svg+xml;base64,"

cwd = os.getcwd()
dir_src = "./flags"
file_out = "./twf/_flags.scss"
content_out = "$flag-data: ("
data = {} # value pair of name and base64 data

print("[STATUS] Building start")

files = glob.glob(f"{os.path.abspath(dir_src)}/*.svg")

for fpath in files:
    fname = os.path.basename(fpath)
    with open(fpath, "rb") as file:
        encoded_svg = base64.b64encode(file.read()).decode("utf-8")
        class_name = fname.split(".")[0].split("_")[:-1]
        class_name.append("flag")
        class_name = "-".join(class_name)

        data[class_name] = encoded_svg

        print(f"  => {class_name}")

for cname, idata in data.items():
    content_out += f"\"{cname}\": url('{IMG_PREFIX}{idata}'),"

content_out = content_out.rstrip(",")
content_out += ");"

with open(f"{os.path.abspath(file_out)}", "w") as fo:
    fo.write(content_out)

print("Done")