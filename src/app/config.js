(function () {
    'use strict';
    
    var app = angular.module('app');
    
    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
    
    
    var events = {
        controllerActivateSuccess: 'controller.activateSuccess'
    };
    
    var config = {
        appErrorPrefix: '[System Error] ', //Configure the exceptionHandler decorator
        appName: 'Flight Search Engine',
        events: events,
        version: '1.0.0'
    };
    
    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider) {
            // turn debugging off/on (no info or warn)
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
        }]);
    
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg) {
            cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        }]);
    //#endregion
})();