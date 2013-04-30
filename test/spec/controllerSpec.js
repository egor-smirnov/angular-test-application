'use strict';

describe('winezeusApp controllers', function () {

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

    describe('WineDetailsController', function () {

        var scope, $httpBackend, ctrl,
            cabernetData = function () {
                return window.cabernet;
            };


        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller, backendUrl) {

            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET(backendUrl + '/wines.json/cabernet').respond(cabernetData());

            $routeParams.wineName = 'cabernet';

            scope = $rootScope.$new();
            ctrl = $controller(WineDetailsController, {$scope: scope});
        }));


        it('should fetch wine detail', function () {

            expect(scope.wine).toEqualData({});

            $httpBackend.flush();

            expect(scope.wine).toEqualData(cabernetData());
        });
    });
});
