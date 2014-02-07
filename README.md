ExtraKey
========

ExtraKey - Make your mobile device act as a secondary keyboard.

I know it lacks a lot of information, but I just wanted to get it out of the door as soon as it's technically working so other people can start experimenting with it.

# What is it?

ExtraKey is a NodeJS application that in combination with NirCMD (on windows, no other platform support just yet) can provide you with a simple interface that you can customize to fit your needs to create a secondary (or more than one) input device using your existing mobile devices (tablets, smartphones).

Currently it can send any imaginable key combination directly from your device to your computer where the application is being deployed, allowing you to make keyboard shortcuts easily accessible and visually prominent.

The project was inspired by the [Shortcut-S Keyboard](https://www.kickstarter.com/projects/5074048/special-dedicated-editing-keyboard-for-photoshop) currently raising funds on Kickstarter (full disclosure: I've pledged my support for that project).

The project and code file are provided AS IS under the MIT license.


# How to Use it?

Right now the project is intended for advanced users as it requires some rudimentary skills with git and node/npm.

To get going, simply clone the project:

`git clone https://github.com/elis/extrakey`

install the dependencies:

```
    $ cd extrakey
    $ npm install
```

Once all the dependancies have been successfullt installed, you can run the app by firing it up:

```
    node app.js
```

You can now navigate to your ExtraKeyboard by visiting your local machine's IP on port 3000.


# Adding Key combinations and changing layout

To modify the key combinations open the `keys.yaml` file and simply start adding keys. Each key begins with a dash, and some configurations for the key. Currently the existing support is only for one key push/release at a time, but I'm planning to add complex keyboard (and mouse!) combinations in the near future.

To modify the layout, check out `views/index.ejs` file, it's a plain HTML with some EJS templating to render the keys.yaml file. Feel free to experiment with it. 

Currently the app uses the [Metro UI CSS](http://metroui.org.ua/) for Bootstrap which makes buttons/tiles rather easy to setup.

For questions, suggestions, and general inquiry feel free to contact me via email: eli.sklar@gmail.com