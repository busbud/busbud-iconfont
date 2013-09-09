BusBud Custom Icon Font
=======================

This is a custom icon font to be used on all BusBud products.

It includes a small subset of icons from a few popular open-source icon fonts as well as a few custom icons.

The font is managed and generated via [IcoMoon.io](http://icomoon.io)

---
###Instructions To Update Font

- Go to the [IcoMoon App](http://icomoon.io/app/)
- Click **Load Session** (bottom right) and upload the [session file](IcoMoon Session.js) from this repo ("IcoMoon Session.js")
- Make changes, upload svg files, etc
- Click the **Generate Font** (bottom center)
- Click **Download** (bottom center)
- Replace the contents of the "fontpack" directory of this repo with contents of the zip (but remove the containing folder)
- Click **Store Session** (bottom right) and replace the IcoMoon session file with the newer generated file
- Increment version number in "bower.json" file
- Save changes to git


Other requirements:

- Install [Bower](http://bower.io/) (either globally or in the directory)