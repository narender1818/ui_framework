/*app.service('HomeService', function(){
    
   
   var data = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel",
    ]
      
    this.getData = function(){
        return data;
    }
    return this;

})
*/

app.factory('HomeService', function(){
    
   
  var factoryObject = {};
    
    factoryObject.data = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel",
    ]
    
    factoryObject.dataG = [
        {hour: 1,sales: 54},
    {hour: 2,sales: 66},
    {hour: 3,sales: 77},
    {hour: 4,sales: 70},
    {hour: 5,sales: 60},
    {hour: 6,sales: 63},
    {hour: 7,sales: 55},
    {hour: 8,sales: 47},
    {hour: 9,sales: 55},
    {hour: 10,sales: 30}
    ]
   factoryObject.getData = function(){
        return factoryObject.data;
    }
   factoryObject.getDataG = function(){
        return factoryObject.dataG;
    }
 
   return factoryObject;

})