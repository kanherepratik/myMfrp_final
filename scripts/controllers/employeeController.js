app.controller('employeeController', function($scope, $localStorage, $location, $sessionStorage, employeeService) {

    var empDataCopy = {};
    var mainIndex = -1;

    //save and updates buttons to replace each other by ng-if
    $scope.saveBtn = true;
    $scope.updateBtn = false;


    var init = function() {

        if ($localStorage.empStore)
            $scope.employeeData = $localStorage.empStore;
        else {
            employeeService.getData().then(function(response) {
                $scope.employeeData = response;

            })
        }
        if ($scope.employeeData === null) {
            console.log('err');
            $scope.employeeData = [];
        }
        $scope.employee = {

            employeeId: null,
            employeeName: null,
            title: null,
            position: null,
            competency: null,
            ContactNo: null,
            BloodGroup: null,
            Address: null,
            img: null

        }


    };
     //function for checkingsession
    employeeService.checkSession();

    //onclick of save button each data gets added to table from localStorage

    $scope.blur = function(event){
        angular.forEach($localStorage.empStore, function(val, key){
            if(val.employeeId==$scope.employee.employeeId){
                $scope.employee = val;
            }
        })
    };

    $scope.addData = function(isValid) {

        $scope.saveBtn = true;
        $scope.updateBtn = false;

        //checking whether admin has proccessed any update
        if (mainIndex != -1) {
            $localStorage.empStore.splice(mainIndex, 1, $scope.employee);
            mainIndex = -1;
        } else {
		$scope.employee.img = "assets/images/default.png";
            $scope.employeeData.unshift($scope.employee);

            $localStorage.empStore = $scope.employeeData;

        }
        $scope.idDisable = false;
        init();

        $scope.empForm.$setUntouched();

    };

    //onclick of edit icon the fields get filled by particular employee details
    $scope.editData = function(index) {
        mainIndex = index;
        //replace save button with update button
        $scope.saveBtn = false;
        $scope.updateBtn = true;
        //get the details of particular employee and display 

        $scope.employee = $localStorage.empStore[index];
        $scope.idDisable = true;

    };

    $scope.reset = function() {
        init();
        $scope.empForm.$setUntouched();

    }
    init();
});