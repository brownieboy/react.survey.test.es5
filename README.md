# react.survey.test

# To Install
Clone this github repository.


# Compiled version (JSX to JS)
Open the index.html in your browser, via a local server, to use the compiled, native JavaScript of the survey.  You will need to compile the JSX to JS first, however, by using Babel.  If you are using NPM, you can install like so:

```
// Install support packages
npm install

// Build the html, js and css files
npm run build

// or on Windows
npm run buildwin

```
The call to "npm run build" will call a Webpack task that will build the following files for you:
* ./build/index.html
* ./build/js/bundle.js
* ./build/css/app.css

Now you can open ./build/index.html in your browser, preferably via a local dev server.  (React prefers to run its code through a proper HTTP server rather than directly through the file system.  I use SublimeServer, which I've installed as a package for Sublime Text.)

The index.html file that you just built will load the css and js files correctly.



# Local Dev Server
As an alternative to building and loading the files manually, you can run them through the webpack-dev-server with built-in React hot loading.

```
// Install support packages (if you didn't do this above)
npm install

// Start the webpack-dev-server
npm run start

// or on Windows
npm run startwin

```

# Under Development!
Assuming the task ran okay - look for the "webpack: bundle is now VALID" message - you can now point your browser to either of these addressses:
* http://localhost:8080/build/
* http://localhost:8080/webpack-dev-server/build/

If you edit any of the source files (html, css or JavaScript) in the app folder, webpack should automatically detect the change and display the rebuilt version in your browser.

