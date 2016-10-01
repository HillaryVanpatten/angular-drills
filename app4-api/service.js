angular.module('apiApp').service('service', function($http){

  this.getData = function() {
    return $http({
      method:'GET',
      url:'http://swapi.co/api/people'
    }).then(function(response){
      console.log(response)
      return response;
    }, function(error){
      alert("error");

    })
}

});
