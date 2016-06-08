app.factory('resourceService',function($http,$location,$sessionStorage){
	var resourceSrv={};

	resourceSrv.checkSession =function(){
		if($sessionStorage.empKey==null){
			$location.path('/login');
		}
	}
	return resourceSrv;
});