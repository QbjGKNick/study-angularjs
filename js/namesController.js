var app = angular.module('app', [])
app.controller('namesCtrl', function ($scope) {
  $scope.names = [
    { name:'Jani', country:'Norway' },
    { name:'Hege', country:'Sweden' },
    { name:'Kai', country:'Denmark' }
  ]
})
