app.directive('sampleDirective', function(){

    return {
        template: '<div><h4>Template for directive {{directivename}}</h4></div>',
        link: function(scope, elem, attrs) {
            var therecanbeonly = attrs.attributeValue;
            console.log("dddddd : " + therecanbeonly )
            var nameofdirective = scope.$eval(attrs.attributeValue);
            console.log("nameofdirective : " + nameofdirective )
        },
        controller: function($scope){
            $scope.directivename = 'sampleDirective';
        },
        controllerAs: 'thisController'
      }
})