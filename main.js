'use stricit';


angular.module('pokeApp',[])
.controller('mainCtrl',function ($scope,$http) {

  $http({
    url: `http://pokeapi.co/api/v2/pokedex/1/`,
    method: `GET`
  })
  .then(function (res) {
    $scope.pokelist = res.data.pokemon_entries;
    // console.log("res:", $scope.pokelist);
  })
  .catch(function (err) {
    console.log('err;', err);
  })

})
