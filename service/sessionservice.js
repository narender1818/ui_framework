app.service('sessionService', ['$window', function($window) {
   
    this.save = function(key, value) {
        console.log("welcome in se")
        $window.sessionStorage.setItem(key, value);
    }
    
    this.get = function(key, value) {
        return $window.sessionStorage.getItem(key);
    } 

    this.clear = function() { 
        $window.sessionStorage.clear();
    }    
    
}])   

