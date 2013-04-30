'use strict';

function WineDetailsController($scope, $routeParams, $location, WineService) {

    $scope.wine = {};

    WineService.get($routeParams.wineName, function(data) {

        $scope.wine = data;
    });

    $scope.goBack = function() {

        $location.path('/wines?scope=staff-picks');
    };
}

WineDetailsController.$inject = ['$scope', '$routeParams', '$location', 'WineService'];

function WineListController($scope, $location, WineService) {

    $scope.wines = [
        {'link': 'pinot-noir', 'data': window.pinotNoir},
        {'link': 'cabernet', 'data': window.cabernet}
    ];
}