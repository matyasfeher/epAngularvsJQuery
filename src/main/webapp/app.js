var app = angular.module('mainApp', []);



app.controller("MainController", function ($scope, $http) {
    $http({method: 'GET',
       url: 'api/member'
      }).then(function successCallback(response) {
          console.log("succes");
          $scope.jsonback = response.data;
  }, function errorCallback(response) {
      console.log(response.status + " " + response.statusText);
}); 
    
});

