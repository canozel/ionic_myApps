// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('randomFilm', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('filmCtrl', ['$scope', function($scope) {
  $scope.film_type = false;

  $scope.films = [
    {id: 1, film_type: "Dram", name: "Esaretin Bedeli"},
    {id: 2, film_type: "Aksiyon", name: "Prestij"},
    {id: 3, film_type: "Dram", name: "Limit Yok"}
  ];

  $scope.random = function() {
    $scope.filter_films = []
    for (var i = $scope.films.length - 1; i >= 0; i--) {
      if($scope.films[i].film_type === "1997" && $scope.film_type){
        $scope.filter_films[i] = $scope.films[i]  
      }
    };
    console.log($scope.filter_films);
    $scope.film = $scope.films[Math.floor((Math.random()*$scope.films.length)+1)];
  }
}])