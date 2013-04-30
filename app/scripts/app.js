'use strict';

var winezeusApp = angular.module('winezeusApp', ['winezeusAppServices', 'ngMockE2E'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/wines?scope=staff-picks', {
                templateUrl: 'views/wineList.html',
                controller: WineListController
            }).
            when('/wines/:wineName', {
                templateUrl: 'views/wineDetail.html',
                controller: WineDetailsController
            }).
            when('/:wineName', {
                templateUrl: 'views/wineDetail.html',
                controller: WineDetailsController
            }).
            otherwise({
                redirectTo: '/pinot-noir'
            });
    }])

    .value('backendUrl', 'http://localhost:3000');


angular.module('winezeusApp')
    .run(['$httpBackend', 'backendUrl', function($httpBackend, backendUrl) {

        $httpBackend.whenGET(/views\/.*/).passThrough();
        $httpBackend.whenGET(backendUrl + '/wines.json/pinot-noir').respond(pinotNoir);
        $httpBackend.whenGET(backendUrl + '/wines.json/cabernet').respond(cabernet);
    }]);