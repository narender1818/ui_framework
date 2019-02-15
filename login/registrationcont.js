app.controller('RegistrationController', [ '$scope','$location'
    ,function($scope,$location){ 
        
        $scope.submitMyForm=function(){
        /* while compiling form , angular created this object*/
        console.log("firstname : "+$scope.firstname)
        console.log("lastname : "+$scope.lastname)
        console.log("email : "+$scope.email)
        console.log("address : "+$scope.address)
        console.log("country : "+$scope.country)
     
        $location.path('/login')
       
        }
       
    }
]);