
/*app.controller('myController',['thisService', function(thisService){

    //var serviceInstance = new thisService;
    var someFood = thisService.getFood();
    var someDrink = thisService.getDrink();
    console.log("some food"+someFood)
    console.log("someDrink"+someDrink)
}])*/

app.controller('myController', ['sessionService', function(sessionService){   
    
    console.log("----------sessionService----111-" )
    var vm = this;;
    console.log(vm)
    
    vm.getServiceSession = function () {
        console.log("----------sessionService-----" )
        console.log(sessionService.get('name'))
        vm.model = {
            name: sessionService.get('name'),
            nickname: sessionService.get('nickname'),
            status: 'Retrieved by service on ' + new Date()
        };
    }
    
    vm.setServiceSession = function() { 
        console.log("-1111" )
        sessionService.save('name', vm.model.name);
        sessionService.save('nickname', vm.model.nickname);
        vm.getServiceSession();
    } 
    
    vm.clearServiceSession = function() {
        sessionService.clear();
        vm.getServiceSession();
    }
    // for add and remove warning 
    vm.alerts = [];

   // vm.addDanger = addDanger;
    //vm.addWarning = addWarning;
    //vm.dismissAlert = dismissAlert;
    
    vm.addDanger = function() {
       addAlert('danger', 'Danger, Will Robinson! Danger!'); 
    };
    
    vm.addWarning = function() {
        addAlert('warning', 'Warning! Warning! Alien approaching!');
    };
    
    vm.addAlert = function(type, text) {
        vm.alerts.push({ type: type, text: text });
    }

    vm.dismissAlert = function(index) {
        vm.alerts.splice(index, 1);
    }
    
}])