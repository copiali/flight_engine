/**
 * Config for the router
 */
(function () {
    'use strict';
    angular.module('app').config(
        ['$stateProvider', '$urlRouterProvider', routeConfigurator]);
    function routeConfigurator($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
              .otherwise('/app');
        $stateProvider
            .state('app', {
                url: '/app',
                controller: 'appCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/layout/app.html'
            });
    }
})();
