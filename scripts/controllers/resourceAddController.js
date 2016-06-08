app.controller('resourceAddController', function($scope, $localStorage, $sessionStorage, randomString, employeeService) {

    var empDataCopy = {};
    employeeService.checkSession();

    $scope.saveBtn = true;
    $scope.updateBtn = false;
    var mainIndex = -1;
    var init = function() {
        $scope.empData = $localStorage.empDetails;
        if ($scope.empData == null) {
            $scope.empData = [];
        }
        $scope.employee = {
            requestId: null,
            designation: null,
            experienceYears: null,
            number: null,
            skill: null,
            competency: null,
            position: null,
            location: null
        }
    };
    $scope.addData = function() {
        $scope.saveBtn = true;
        $scope.updateBtn = false;



        if (mainIndex != -1) {
            $localStorage.empDetails.splice([mainIndex], 1, $scope.employee)
            mainIndex = -1;
        } else {
            $scope.employee.requestId = randomString(6);
            $scope.empData.unshift($scope.employee);
            $localStorage.empDetails = $scope.empData;
        }

        init();
        $scope.reqForm.$setUntouched();


    }; //end of addData function

    //function to edit data

    $scope.editData = function(index) {
        mainIndex = index;
        $scope.saveBtn = false;
        $scope.updateBtn = true;
        $scope.employee = $localStorage.empDetails[index];

    };

    $scope.reset = function() {
        init();
        $scope.reqForm.$setUntouched();

    }



    init();
});