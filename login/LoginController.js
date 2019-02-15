
(function () {
    'use strict';
    
    app.controller('LoginController', [ '$scope','$location','$window', '$rootScope'
        ,function($scope,$location,$window, $rootScope){ 
            $scope.loginAction=function(){
            /* while compiling form , angular created this object*/
            console.log("firstname : "+$scope.email);
            console.log("lastname : "+$scope.password);
           $location.path("/home").replace()
          
        
          
        }
        }
    ])
    
})();    