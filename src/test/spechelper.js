/*jshint -W079 */
var specHelper = (function () {
    var service = {
        verifyNoOutstandingHttpRequests: verifyNoOutstandingHttpRequests,
        resourceStaticData: resourceStaticData
    };
    return service;

    function resourceStaticData() {
        return {
            "data": [
                { "airLine": "jetstar", "flight": "JQ793", "type": "oneway", "takeOff": "2015-03-25T12:45", "landing": "2015-03-25T15:15", "passengers": 56, "price": 490.50, "from": "Sunshine Coast", "to": "Melbourne" },
                { "airLine": "qantas", "flight": "QF413", "type": "oneway", "takeOff": "2015-03-25T07:45", "landing": "2015-03-25T09:20", "passengers": 56, "price": 365, "from": "Syndey", "to": "Melbourne" },
                { "airLine": "jetstar", "flight": "JQ959", "type": "oneway", "takeOff": "2015-03-25T10:55", "landing": "2015-03-25T18:10", "passengers": 56, "price": 580, "from": "Syndey", "to": "Perth" },
                { "airLine": "qantas", "flight": "QF453", "type": "oneway", "takeOff": "2015-03-25T11:10", "landing": "2015-03-25T18:20", "passengers": 56, "price": 620, "from": "Syndey", "to": "Perth" },
                { "airLine": "qantas", "flight": "QF580", "type": "oneway", "takeOff": "2015-03-26T11:10", "landing": "2015-03-26T18:20", "passengers": 56, "price": 609, "from": "Perth", "to": "Sydney" },
                { "airLine": "jetstar", "flight": "JQ989", "type": "oneway", "takeOff": "2015-03-26T10:55", "landing": "2015-03-26T18:10", "passengers": 56, "price": 450, "from": "Perth", "to": "Sydney" },
                { "airLine": "virgin", "type": "return", "takeOff_depart": "2015-01-22T10:17", "flight_depart": "CX110", "landing_depart": "2015-03-27T10:17", "takeOff_return": "2015-03-28T17:17", "flight_return": "VJ110", "landing_return": "2015-01-25T10:17", "passengers": 56, "price": 2800, "from": "Syndey", "to": "Paris" },
                { "airLine": "jetstar", "type": "return", "takeOff_depart": "2015-03-23T07:00", "flight_depart": "JQ603", "landing_depart": "2015-03-23T08:35", "takeOff_return": "2015-03-31T15:05", "flight_return": "JQ616", "landing_return": "2015-03-31T16:30", "passengers": 56, "price": 566, "from": "Syndey", "to": "Melbourne" },
                { "airLine": "jetstar", "type": "return", "takeOff_depart": "2015-03-26T19:35", "flight_depart": "QF783", "landing_depart": "2015-03-26T21:10", "takeOff_return": "2015-04-22T16:00", "flight_return": "QF764", "landing_return": "2015-04-22T18:20", "passengers": 56, "price": 349, "from": "Syndey", "to": "Adelaide" }
            ]
        };
    }

    function verifyNoOutstandingHttpRequests() {
        afterEach(inject(function ($httpBackend) {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }));
    }
})();