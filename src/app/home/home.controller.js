//(function() {
  angular.module('buildorder.home')
    .controller('HomeCtrl', HomeController);

  HomeController.$inject = ['$scope', 'baseSvc'];

  function HomeController($scope, baseSvc) {
     var syncObject = baseSvc.getSyncObject();
     syncObject.$bindTo($scope, "data");
  }
//})();
