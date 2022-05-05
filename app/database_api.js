/*
 * Serve JSON to our AngularJS client
 */
module.exports = function(connection) {
    var User = require('../models/user')(connection)

    database_api.get_user_data(function(){

        User.find(function (err, users) {

            if (err){
                console.log(err)
                return(err);
            }

            else{
                console.log("Find ok...")
                console.log(users)
                return(users)
            }
        });

    });
}

    //register = function(req,res){

    //     var body = req.body;

    //     User.findOne({ name: body.username}, function (err, findUser) {
    //         if(findUser==null){
    //             var user = new Users({ name: body.username,
    //                 password:body.password, leagues: [] })
    //             user.save(function (err, user) {
    //                 if (err)
    //                     console.log(err)

    //                 res.end()
    //             });
    //         }else{
    //             res.send(403, 'Username already in use');
    //         }
    //     });

    // };

    // login = function(req,res){

    //     var body = req.body;

    //     User.findOne({ name: body.username,
    //         password: body.password},function (err, users) {

    //         if (err){
    //             console.log(err)
    //             res.send(500, 'Internal Server Error');
    //         }

    //         if(users!=null){
    //             req.session.loggedIn = true;
    //             req.session.user = body.username;
    //             console.log("Find ok...")
    //             console.log(users)
    //             res.json({
    //                 users : users
    //             })
    //         }else{
    //             console.log("Find ERROR...")
    //             res.send(401, 'Username or password is invalid');
    //         }
    //     });

    // };

    // logout = function(req,res){
    //     req.session.loggedIn = false;
    //     req.session= null;
    //     res.end()
    // };
