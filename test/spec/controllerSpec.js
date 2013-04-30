'use strict';

describe('winezeusApp controllers', function () {

    var $httpBackend;

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(
        module('winezeusAppServices', function ($provide) {
            $provide.value("backendUrl", 'http://localhost:3000');
        })
    );

    beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('WineDetailsController', function () {

        var scope, ctrl, cabernetData = window.cabernet;

        beforeEach(inject(function ($rootScope, $routeParams, $controller, backendUrl) {

            $httpBackend.expectGET(backendUrl + '/wines.json/cabernet').respond(cabernetData);

            $routeParams.wineName = 'cabernet';

            scope = $rootScope.$new();
            ctrl = $controller(WineDetailsController, {$scope: scope});
        }));


        it('should fetch wine detail', function () {

            expect(scope.wine).toEqualData({});

            $httpBackend.flush();

            expect(scope.wine).toEqualData(cabernetData);
        });
    });
});
