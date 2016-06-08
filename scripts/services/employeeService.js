app.factory('employeeService', function($http, $location, $q, $sessionStorage, $localStorage) {
    var empSrv = {}; //factory object
    var dataStore = [];

    //checking session
    empSrv.checkSession = function() {
        if ($sessionStorage.empKey == null)
            $location.path('/login')
    }


    empSrv.getData = function() {
        var deferred = $q.defer();
        $http.get('json/data.json').then(function(response) {
                empSrv.EmployeeData = response.data.employeeJsonData;
                deferred.resolve(response.data.employeeJsonData);
                if ($localStorage.empStore == null) {
                    $localStorage.empStore = response.data.employeeJsonData;
                } else {
                    angular.forEach($localStorage.empStore.employeeJsonData, function(val, key) {
                        dataStore.push($localStorage.empStore.employeeJsonData[key])
                    })
                    $localStorage.empStore = dataStore;

                }
                if ($localStorage.empStore !== null) {
                    return $q.reject('No Need');
                }

            },
            function(response) {
                deferred.reject(response);
            })
        return deferred.promise;

    };




    return empSrv; //factory object returned
});