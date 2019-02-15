
app.service('thisService',function(){
    
    var _food = 'Chicken';
    var _drink = 'Soda';
    this.getFood = function(){
        return _food;
    }
    this.getDrink = function(){
        return _drink;
    }
    return this;
    
})