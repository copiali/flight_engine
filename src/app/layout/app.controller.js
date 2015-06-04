(function () {
    'use strict';
    var controllerId = 'appCtrl';
    angular.module('app').controller(controllerId, appCtrl);
    appCtrl.$inject = ['common', 'config','datacontext','$scope'];
    function appCtrl(common, config, datacontext, $scope) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log= getLogFn(controllerId);
        var logError = getLogFn(controllerId, 'error');
        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            showWeeks: false
        };
        vm.flights = [];
        vm.searchFields= {
            from: undefined,
            to: undefined,
            depart: undefined,
            back: undefined,
            passenger: 1
        }
        vm.filter = {
            from: undefined,
            to: undefined,
            depart: undefined,
            back: undefined,
            passenger: 1,//default 1
            type: 'return',//default search type is 'return'
            min: 1,
            max:1000
        }
        vm.today = new Date();
        vm.passDrpDown = [1, 2, 3, 4, 5];
        vm.currentPage = 0;
        vm.pageSize = 4;
        vm.appName = config.appName || 'Flight Search';

        vm.numberOfPages = numberOfPages;
        vm.currencyFormatting = currencyFormatting;
        vm.timediff = common.timediff;
        vm.search = search;
        vm.tabClick = tabClick;
        $scope.$watch('vm.filter', resetPage, true);
        activate();

        function activate() {
            var promises = [getFlight()];
            common.activateController(promises, controllerId)
                .then(function () {
//                log('Activated App View');
            }).catch(function (error) {
                logError(error.status + ' ' + error.statusText, error);
            });
        }

        function currencyFormatting(value) {
            return "$" + value.toString();
        }
        
        //apply filter after click
        function search() {
            angular.extend(vm.filter, vm.searchFields);
        }

        function tabClick(type) {
            vm.filter.type = type;
            vm.searchFields.back = undefined;
        }

        function numberOfPages(length) {
            return Math.ceil(length / vm.pageSize);
        }

        function resetPage() {
            vm.currentPage = 0;
        }


        function getFlight() {
            return datacontext.getFlight().$promise.then(function (result) {
                vm.flights = result.data;
                return vm.flights;
            });
        }
    }
})();