app.controller('headerController', function($scope,$location,$sessionStorage,loginService){
	
	$scope.userName = $sessionStorage.empName;
	$scope.userRole = $sessionStorage.empKey;

	

	//on logout session storage is getting cleared
	$scope.adminLogout = function(event){
		
		$sessionStorage.$reset();
		$location.path('/login');
		
	};





});