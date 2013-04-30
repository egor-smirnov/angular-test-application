'use strict';

function WineDetailsController($scope, $routeParams, $location, WineService) {

    WineService.get($routeParams.wineName, function(data){

        $scope.wine = data;
    });
}

WineDetailsController.$inject = ['$scope', '$routeParams', '$location', 'WineService'];

/*function WineListController($scope, $location, WineService) {

}*/