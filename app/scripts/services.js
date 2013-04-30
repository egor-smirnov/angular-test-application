'use strict';

angular.module('winezeusAppServices', []).

    factory('WineService', ['$http', 'backendUrl', function ($http, backendUrl) {

        return new WineService($http, backendUrl);
    }]);

var WineService = (function () {

    function WineService($http, backendUrl) {

        this.$http = $http;
        this.backendUrl = backendUrl;
    }

    WineService.prototype.get = function(wineName, successFn) {

        successFn = successFn || function() {};

        return this.$http.get(this.backendUrl + '/wines.json/' + wineName)
            .success(function (response) {

                successFn(response);
            });
    };

    return WineService;
})();