(function () {
    'use strict';
    angular.module('app').filter('fligtFilter', fligtFilter);
    function fligtFilter() {
        var valueCheck = function (value, toCheck) {
            if (value) return value.toLowerCase() === toCheck.toLowerCase();
            return true;
        }
        
        var minMaxRange = function (min, max, toCheck) {
            if (min && max) return toCheck >= min && toCheck <= max;
            return true;
        }
        
        var lessThan = function (value, toCheck) {
            if (value) return value <= toCheck;
            return true;
        }
        var dateRange = function (startDate, endDate, item) {
            switch (item.type) {
                case 'return':
                    var takeoffDepart = moment(item.takeOff_depart, "YYYY-MM-DD");
                    var landingReturn = moment(item.landing_return, "YYYY-MM-DD");
                    var startIsSame = true;
                    var endIsSame = true;
                    if (startDate) startIsSame = takeoffDepart.isSame(startDate);
                    if (endDate) endIsSame = landingReturn.isSame(endDate);
                    if (startIsSame && endIsSame) return true;
                    break;
                case 'oneway':
                    var takeoff = moment(item.takeOff, "YYYY-MM-DD");
                    if (startDate) {
                        if (takeoff.isSame(startDate)) return true;
                    } else {
                        return true;
                    }
                    break;
                default:
                   return true;
            }
        }

        return function (list, search) {
            var result = [];
            angular.forEach(list, function (item, key) {
                if (valueCheck(search.from, item.from) &&
                    valueCheck(search.to, item.to) &&
                    valueCheck(search.type, item.type)&&
                    lessThan(search.passenger,item.passengers)&&
                    dateRange(search.depart, search.back, item) &&
                    minMaxRange(search.min, search.max, item.price)) result.push(item);
            });
            return result;
        };
    }
})();