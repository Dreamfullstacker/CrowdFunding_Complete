#Angular Express MongoDB Bootstrap Noty JS Seed

I improved this project, adding Noty JS (http://needim.github.io/noty/) for Popup Notifications, and creating a small set of REST APIs to perform login, logout and check session in Express JS, interacting with MongoDB.
I remove Jade Templating, because i don't like it, so i implemented some little html page, using Angular JS template engine.

Forked from [btford/angular-express-seed](https://github.com/btford/angular-express-seed) and spiced with [Twitter Bootstrap](https://github.com/twitter/bootstrap). jQuery added for convenience.

Start an awesome app with AngularJS + Bootstrap on the front, Express + Node on the back. This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use Node to serve their app.

The seed contains angular libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use angular-express-seed

Clone the angular-express-seed repository, run `npm install` to grab the dependencies and start hacking!

### Running the app

Runs like a typical express app:

    node app.js

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    models/             --> contains mongoDB simple user Schema
        users.js
    public/             --> all of the files to be used in on the client side
      bootstrap/        --> all bootstrap files
        css/
        img/
        js/
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
          jquery/
            jquery-2.0.3.min.js
          noty/
            layouts/
                top.js
            themes/
                default.js
            jquery.noty.js
    routes/
      api.js            --> route for serving JSON, contains MongoDB configuration
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      webapp.html       --> session authenticated page
      partials/         --> angular view partials (partial jade templates)
        home.html
        login.html
        register.html



## Example App

A simple [blog](https://github.com/btford/angular-express-blog) based on this seed.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.