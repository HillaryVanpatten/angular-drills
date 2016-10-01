angular.module('apiApp').controller('mainCtrl', function($scope, service) {
  $scope.test = 'asdglkj'
  function getData() {
    console.log('is this even running')
    service.getData().then(function(response){
      console.log(11111, response);
      $scope.data = response;
    });
  }
getData();
});
