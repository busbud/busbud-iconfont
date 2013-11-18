BusBud Custom Icon Font
=======================

This is a custom icon font to be used on all BusBud products.

It includes a small subset of icons from a few popular open-source icon fonts (bootstrap) as well as a few custom icons and a few we purchased.

The pixel grid follows bootstrap at 14px, so before importing icons from other sets, they should be optimized for a 14px grid.

The font is managed and generated via [IcoMoon.io](http://icomoon.io)

---
###Instructions To Update Font

- Go to the [IcoMoon App](http://icomoon.io/app/)
- Log in with username `devs@busbud.com` -- ask Theo for password (hint: address)
- Load up the project using the json file in this repo ( Manage Projects > Import Project > Select json file )
- Make changes, upload new icons (svg files), etc
- Click **Font** (bottom center)
- Click **Download** (bottom center)
- Replace the contents of the "fontpack" directory of this repo with contents of the zip (but remove the containing folder)
- Add / replace any custom svgs in the custom_icons directory
- Increment version number in "bower.json" file
- Update project json file ( Manage Projects > Busbud Public Website > Download )
- Replace "Busbud Public Website.json" with new one
- Save changes to git


Other requirements:

- Install [Bower](http://bower.io/) (either globally or in the directory)