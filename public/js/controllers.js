'use strict';
/* main App Controllers */

var mainAppControllers = angular.module('mainAppControllers', []);

mainAppControllers.controller('LoginCtrl', ['$scope', '$http','$window','$location',
    function ($scope, $http) {

        $scope.failed_login = "";

        $scope.login = function()
        {

            var user = {"username": $scope.username, "password": $scope.password};

            if($scope.username!==undefined || $scope.password !==undefined){
                $http({method: 'POST', url: '/api/login', data:user}).
                    success(function(data, status, headers, config) {
                        console.log(data);
                        $window.location.href="/home";
                    }).
                    error(function(data, status, headers, config) {
                        console.log(data);
                        $scope.failed_login = "Login Failed";
                        noty({text: data,  timeout: 2000, type: 'error'});
                    });
            }

        }
    }
]);


mainAppControllers.controller('RegistrationCtrl', ['$scope', '$http','$window','$location',
    function ($scope, $http) {


    }
]);

/* home App Controllers */


var homeAppControllers = angular.module('homeAppControllers', []);
homeAppControllers.controller('PledgeCtrl', ['$scope', '$http','$window','$location',
function ($scope, $http) {


    }
]);
homeAppControllers.controller('PersonalCtrl', ['$scope', '$http','$window','$location',
function ($scope, $http) {


    }
]);

/* web App Controllers */


var webAppControllers = angular.module('webAppControllers', []);


webAppControllers.controller('HomeCtrl', ['$scope', '$http','$window','$location',
    function ($scope, $http) {


    }
]);

/* admin App Controllers */


var adminAppControllers = angular.module('adminAppControllers', []);


adminAppControllers.controller('UserManagerCtrl',
    function ($scope, $timeout, $interval, $http) {
        $scope.mywelcome = "Welcome to Admin Page";
        $scope.theTime = new Date().toLocaleTimeString();
        $http.get('/admin/get_user_data').then(function(response) {
            $scope.users = response.data;       
        });
        $interval(function () {
            $scope.theTime = new Date().toLocaleTimeString();
        }, 1000);
        $timeout(function () {
            $scope.mywelcome = "You can manage User and Page content!";
        }, 2000);
        $scope.enabledEdit =[];

        $scope.addUser = function(){
            var temp_user ={ username:"",password:"",disableEdit:false};
            $scope.users.push(temp_user);
            $scope.enabledEdit[$scope.users.length-1]=true;
        }
        $scope.editUser = function(index){
            console.log("edit index"+index);
            $scope.enabledEdit[index] = true;
        }
        $scope.deleteUser = function(index , id) {
            $http.get('/admin/delete_user_data').success(function(response){
                $scope.users.splice(index,1);
            });
           
        }
        $scope.updateUser = function(index , id){
            $http.post('/admin/updata_user_data').success(function(response){

            });
        }
        $scope.cancelUser = function(index , id){
            $scope.enabledEdit[index] = false;
            $http.get('/admin/get_user_data').then(function(response) {
                $scope.users = response.data;       
            });
        }
        $scope.submitUser = function(){

            console.log("form submitted:"+angular.toJson($scope.users ));
        }
    }
);


adminAppControllers.controller('PageManagerCtrl', ['$scope', '$http','$window','$location',
    function ($scope, $http) {


    }
]);