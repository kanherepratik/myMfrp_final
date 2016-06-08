app.factory('loginService', function($http, $location, $sessionStorage, $localStorage) {
    var loginSrv = {};
    var dataStore = [];


    loginSrv.JSONData = ""; //login details from JSON
    loginSrv.checkAllLoginDetails = function(userContent) {

        //get JSON data
        $http.get('json/data.json').then(function(response) {
            loginSrv.JSONData = response.data.loginJsonData;
            //calling a function to match data entered by user
            matchUserNameNPassword(userContent);
        });


    };

    //validating user name and password
    matchUserNameNPassword = function(userContent) {
        var nameMatch = passwordMatch = -1;
        loginSrv.role = "";
        angular.forEach(loginSrv.JSONData, function(value) {
                if (value.name == userContent.loginName)
                    nameMatch = 0;
                if (value.password == userContent.password)
                    passwordMatch = 0;
                if (value.name == userContent.loginName && value.password == userContent.password) {
                    loginSrv.role = value.role;
                    loginSrv.empName = value.name;
                    $sessionStorage.empKey = loginSrv.role;
                    $sessionStorage.empName = loginSrv.empName;
                }
            }) //end of forEach loop

        if ((nameMatch == -1 || nameMatch == -1 && passwordMatch == -1))
            alert("You are not Authorised");
        if (passwordMatch == -1 && nameMatch == 0)
            alert("Wrong Password");
        if (loginSrv.role != "") {
            if (loginSrv.role == "HR-Manager") {

                $location.path("/employee_list");
                $location.replace();



            }

            if (loginSrv.role == "HR-Staff") {

                $location.path("/employee_list");
                $location.replace();



            }
            if (loginSrv.role == "Manager") {
                $location.path("/resource_request");
                $location.replace();



            }
        }
    }; //end of matchUserNameNPassword()




    return loginSrv;
});