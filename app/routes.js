var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost:27017/crowdfunding';
var connection = mongoose.createConnection(dbURI);
var User = require('../models/user')(connection)
module.exports = function(app, passport) {

    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/home', isLoggedIn, function(req, res){
        res.render('home');
    });
    app.get('/admin', isAdminLogIn, function(req, res){
        res.render('partials/admin/admin')
    });

    app.get('/partial/auth/:name', isLoggedIn, function (req, res) {
        var name = req.params.name;
        res.render('partials/auth/' + name);
    });

    app.get('/partial/:name', function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    });

    app.post('/api/login', passport.authenticate('local-login', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // process the signup form
    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/#/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    app.get('/api/logout', isLoggedIn, function(req, res){
        req.logout();
        res.redirect('/');
    });

    app.get('/admin/get_user_data'  , function(req,res){
        User.find(function (err, users) {

            if (err){
                console.log(err)
                res.send(500, 'Internal Server Error');
            }
            else{
                console.log("Find ok...")
                console.log(users)
                res.json(users)
            }
        });
    })
    app.get('/admin/delete_user_data/:id' , function(req,res){
        if (userId && userId.match(/^[0-9a-fA-F]{24}$/)) {
            User.findByIdAndDelete(req.params.id, function (err) {
                if(err) console.log(err);
                console.log("Successful deletion");
            })
        } else {
            return res.send(401, {message: "user id is not valid"});
        }
    })
    app.post('/admin/delete_user_data' , function(req,res){

    })
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }

    function isAdminLogIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/index');
    }

}
