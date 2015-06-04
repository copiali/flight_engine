(function () {
    'use strict';

    // Define the common module
    var commonModule = angular.module('common', []);

    // Must configure the common service and set its
    // events via the commonConfigProvider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: ''
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common',
        ['$q', '$rootScope', '$timeout', 'commonConfig', 'logger', common]);

    function common($q, $rootScope, $timeout, commonConfig, logger) {

        var service = {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            // generic
            activateController: activateController,
            logger: logger, // for accessibility
            timediff : timediff  
        };

        return service;

        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
            });
        }

        function timediff(start, end) {
            var result='';
            var diff = moment(end).diff(moment(start));
            var d = Math.floor(moment.duration(diff).asHours()) + moment.utc(diff).format(":mm");
            var hour = d.split(':')[0];
            var min = d.split(':')[1];
            if (hour !== '0') result = hour + " HOUR ";
            if (min !== '00') result = result + min + " MINUTES";
            return result;

        }


        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

    }
})();