angular.module('helloAngularControllers', []).controller('ViewTodosController', ['$scope', function($scope) {
    $scope.todos = [{
        title : 'Complete Task A',
        description : 'Task A is related to Completing tutorial A'
    }, {
        title : 'Complete Task B',
        description : 'Task A is related to Completing tutorial B'    
    }, {
        title : 'Complete Task C',
        description : 'Task A is related to Completing tutorial C'
    }, {
        title : 'Complete Task D',
        description : 'Task A is related to Completing tutorial D'
    }, {
        title : 'Complete Task E',
        description : 'Task A is related to Completing tutorial E'
    }];
}]);