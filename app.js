'use strict';
 
var app = angular.module('app',['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        tamplate: '<strong>No contantgfgfg avalable here.....</strong>'
    })
    .when("/login", {
        controller: 'LoginController',
        templateUrl: '/login/loginview.htm'
        
    })
    
    .when("/registration", {        
        controller: 'RegistrationController',
        templateUrl: '/login/registration.htm'        
    })
    
    .when("/home", {        
        controller: 'HomeController',
        templateUrl: '/home/home.htm'        
    })
    
     .when("/cchart", {        
        controller: 'CountryController',
        templateUrl: '/cchart/countrychart.htm'        
    })
    .otherwise({ redirectTo: "/home" });
   
}]);


