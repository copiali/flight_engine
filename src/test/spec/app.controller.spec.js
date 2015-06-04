"use strict";

describe('app.layout', function () {
    var $q, $controller, scope, controller, datacontext;

    var datacontextMock = function () {

        var data = specHelper.resourceStaticData();

        var getFlight = function () {
            var promise = $q.when(data);
            return { $promise: promise };
        }

        return {
            getFlight: getFlight
        }
    }
    beforeEach(module('app'));
    beforeEach(inject(function ($rootScope, _$q_, _$controller_) {
        $controller = _$controller_;
        scope = $rootScope.$new();
        $q = _$q_;
        datacontext = datacontextMock();
        spyOn(datacontext, 'getFlight').and.callThrough();
        controller = $controller("appCtrl", { $scope: scope, datacontext: datacontext });
        scope.$apply();
    }));
    
    
    
    describe('app controller', function () {
        it('should be created successfully', function () {
            expect(controller).toBeDefined();
        });
        it('should retrive flights data when controller is loaded', function () {
            expect(datacontext.getFlight).toHaveBeenCalled();
        });

        describe('after activate', function () {
            it('should have at least 1 flight data', function () {
               expect(controller.flights.length).toBeGreaterThan(0);
            });
        });
    });
    
   

    specHelper.verifyNoOutstandingHttpRequests();
});