'use strict';

var App = angular.module('winezeusApp', ['ngMockE2E'])
  .config(
    //If you're thinking outside (which you should be), u'll probably want to start here ^^
    // Good Luck!
  )

  .value('backendUrl', 'http://localhost:3000');


App.run(function ($httpBackend, backendUrl) {
        $httpBackend.whenGET(/views\/.*/).passThrough();
        $httpBackend.whenGET(backendUrl + '/wines.json/pinot-noir').respond(pinotNoir);
        $httpBackend.whenGET(backendUrl + '/wines.json/cabernet').respond(cabernet);
    });