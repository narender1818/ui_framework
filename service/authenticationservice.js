app.service('AuthenticationService', ['$window', function($window) {
   
    var _food = 'Chicken';
    var _drink = 'Soda';
    this.getFood = function(){
        return _food;
    }
    this.getDrink = function(){
        return _drink;
    }
    return this;
    
}])   
