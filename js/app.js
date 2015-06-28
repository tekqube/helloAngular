var helloAngularApp = angular.module('helloAngularApp', ['ngRoute',
                                                        'helloAngularControllers']);

helloAngularApp.config(['$routeProvider',
                        function($routeProvider) {
                            $routeProvider.when('/home', {
                                templateUrl : 'main.html',
                                controller : 'MainController'
                            }).when('/view', {
                                templateUrl: 'viewTodos.html',
                                controller: 'ViewTodosController'
                            }).otherwise({
                                templateUrl : 'main.html',
                                controller : 'MainController'    
                            });                                                
                        }
]);