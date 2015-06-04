(function () {
    'use strict';
    angular.module('app').filter('startFrom', startFrom);
    function startFrom() {
        return function(input, start) {
            if (input) {
                start = +start; //parse to int
                return input.slice(start);
            }
            return [];
        }
    }
})();