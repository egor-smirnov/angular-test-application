'use strict';

describe('winezeusApp services', function () {

    var $httpBackend;
    var WineService;

    beforeEach(
        module('winezeusAppServices', function ($provide) {
            $provide.value("backendUrl", 'http://localhost:3000');
        })
    );

    beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get('$httpBackend');
        WineService = $injector.get('WineService');
    }));

    afterEach(function () {

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('WineService', function () {

        var pinotNoirData = window.pinotNoir;

        var cabernetData = window.cabernet;

        beforeEach(inject(function ($routeParams, backendUrl) {

            $httpBackend.whenGET(backendUrl + '/wines.json/pinotNoir').respond(pinotNoirData);
            $httpBackend.whenGET(backendUrl + '/wines.json/cabernet').respond(cabernetData);
        }));


        it('should had working get method', function () {

            var wine;

            runs(function() {

                WineService.get('pinotNoir', function(data) {

                    wine = data;
                });

                $httpBackend.flush();
            });

            waitsFor(function () {

                return wine !== undefined;
            }, 500);

            runs(function () {

                expect(wine.name).toBe(window.pinotNoir.name);
                expect(wine.year).toBe(window.pinotNoir.year);
            });

            runs(function () {

                WineService.get('cabernet', function (data) {

                    wine = data;
                });

                $httpBackend.flush();
            });

            waitsFor(function () {

                return wine !== undefined;
            }, 500);

            runs(function () {

                expect(wine.name).toBe(window.cabernet.name);
                expect(wine.year).toBe(window.cabernet.year);
            });
        });
    });
});
