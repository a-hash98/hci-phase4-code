
## *****
## NOTE: code for each of the pages is in the 'screens' folder.
## *****

## Installation

### Install Node.js

For starters, make sure you have a recent version of
[Node](https://nodejs.org/en/) installed on your system. Anything over version
12 is fine.

Once Node has been installed, run the following on the command line to make sure
it's been installed correctly:

```
$ node -v
```

If you see the current version of Node in response, you've successfully
installed Node on your machine.

For example,

```
$ node -v
v13.2.0
```

### Install Project Dependencies

First, navigate to the project directory. The .zip will likely be in your
downloads folder, so extract the .zip and move it to the desired location
before proceeding.

Now, run the following commands to install the project dependencies (note that
you'll need an internet connection to do so).

```
$ cd Desktop/New-App
$ npm install
```

> The `cd` command above takes you into the project directory so you can install
> the correct dependencies. You should replace `Desktop/New-App` with the actual
> path to unzipped project folder.

## Running

To start your project, simply run: `npm start` inside of the project directory
(make sure you've [installed the dependencies
locally](#install-local-dependencies) first). This should open the Expo
developer tools in a browser tab.

## File Structure

```
.
    ├── assets             # Static assets like images and fonts.
    ├── config             # JS representation of fonts, images, themes, and more
        └── Themes.js          # Example file for app's themes
    ├── screens            # React Native code for the screens built.
    │   └── MyFirstScreen.js   # Example file for the screen named "My First Screen"
    ├── utilities          # Utility functions needed by your app
    ├── .gitignore         # List of files to ignore when comitting with Git
    ├── App.js             # Entry point for app
    ├── app.json           # Configuration file for app, used by Expo
    ├── AppNavigator.js    # Code for app's navigators
    ├── package.json       # The metadata for project, including dependencies
    └── README.md          # This file
```



