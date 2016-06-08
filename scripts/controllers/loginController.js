app.controller('loginController',function($scope,loginService){
	
	//to validate the login details and load the next page based on role
	$scope.submitForm = function(isValid){
		loginService.checkAllLoginDetails($scope.user);//data entered by user is passed as parameters
		
	};
});