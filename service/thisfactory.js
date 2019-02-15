app.factory('thisFactory', function(){
    
    var factoryObject = {};
    
    factoryObject.food = 'narender';
    factoryObject.drink = 'paul';
    factoryObject.getAll = function(){
        return factoryObject.food + ' ' + factoryObject.drink;
    }

    return factoryObject;

})