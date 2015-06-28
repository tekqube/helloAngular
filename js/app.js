var helloAngularApp = angular.module('helloAngularApp', ['ngRoute',
                                                        'helloAngularControllers']);

helloAngularApp.config(['$routeProvider',
                        function($routeProvider) {
                            $routeProvider.when('/home', {
                                templateUrl : 'index.html',
                                controller : 'MainController'
                            }).
                            otherwise({
                                templateUrl : 'index.html',
                                controller : 'MainController'    
                            });                                                
                        }
]);