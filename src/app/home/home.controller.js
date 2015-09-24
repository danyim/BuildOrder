(function() {
  angular.module('buildorder.home')
    .controller('HomeCtrl', HomeController);

  HomeController.$inject = ['$scope', 'baseSvc'];

  function HomeController($scope, baseSvc) {
    var vm = this;
    vm.value = null;
    vm.builds = baseSvc.getBuilds();
    vm.addValue = addValue;

    var syncObject = baseSvc.getBuild();
    syncObject.$bindTo($scope, 'data');

    function addValue(value) {
      vm.builds.$add(value);
    }
  }
})();
