(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app')
        .factory(serviceId, ['$resource', datacontext]);

    function datacontext($resource) {

        var service = {
            getFlight: getFlight,
        };

        return service;

        function getFlight() {
            return $resource('data/data.json').get();
        }

    }
})();