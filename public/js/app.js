'use strict';

var mainApp = angular.module('mainApp', [
    'ngRoute',
    'mainAppControllers'
]);

mainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'partial/login',
                controller: 'LoginCtrl'
            }).
            when('/register', {
                templateUrl: 'partial/register',
                controller: 'RegistrationCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }
]);

var homeApp = angular.module('homeApp', [
    'ngRoute',
    'homeAppControllers'
]);

homeApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/pledge', {
                templateUrl: 'partial/auth/pledge.html',
                controller: 'PledgeCtrl'
            }).
            when('/personal', {
                templateUrl: 'partial/auth/personal.html',
                controller: 'PersonalCtrl'
            }).
            otherwise({
                redirectTo: '/pledge'
            });
    }
]);

var webApp = angular.module('webApp', [
    'ngRoute',
    'webAppControllers'
]);

webApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'partial/auth/home',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }
]);

var adminApp = angular.module('adminApp', [
    'ngRoute',
    'adminAppControllers'
]);

adminApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/user_manager', {
                templateUrl: 'partial/auth/usermanager.html',
                controller: 'UserManagerCtrl'
            }).
            when('/page_manager', {
                templateUrl: 'partial/auth/pagemanager.html',
                controller: 'PageManagerCtrl'
            }).
            otherwise({
                redirectTo: '/user_manager'
            });
    }
]);
