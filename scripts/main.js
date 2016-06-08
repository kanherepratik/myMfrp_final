var app = angular.module("JoinCI", ['ui.router','ui.bootstrap','ngStorage','angularRandomString','ngMessages']);


app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/login");

    $stateProvider
        .state("login", {
            url: "/login",
            views: {
            'main_section': { templateUrl: 'partials/login.html', controller:"loginController" }  
         	}
        
        })
        .state("emp", {
            url: "/employee_list",
            views: {
            'main_section': { templateUrl: 'partials/employee_list.html', controller:"employeeController" },
            'header_section': { templateUrl: 'partials/header_portion.html', controller:"headerController" }    
         	}
        
        })
        .state("resource", {
            url: "/resource_request",
            views: {
            'main_section': { templateUrl: 'partials/resource.html', controller:"resourceAddController" },
            'header_section': { templateUrl: 'partials/header_portion.html', controller:"headerController" }    
            }
        
        })
        .state("FAQ", {
            url: "/faq",
            views: {
            'main_section': { templateUrl: 'partials/faq.html', controller:"resourceAddController" },
            'header_section': { templateUrl: 'partials/header_portion.html', controller:"headerController" }    
            }
        
        });
        
        
});