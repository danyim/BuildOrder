angular
    .module('buildorder')
    .config(BuildOrderConfig)
    .run(BuildOrderRun);

BuildOrderConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

function BuildOrderConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('main', {
      abstract: true,
      url: '/',
      templateUrl: 'app/common/views/content.html'
    })
    .state('main.home', {
      url: '',
      templateUrl: 'app/home/home.html',
      data: { pageTitle: 'Build Order' },
      controller: 'HomeCtrl',
      controllerAs: 'vm'
    });
}

BuildOrderRun.$inject = ['$rootScope', '$state', '$stateParams'];

function BuildOrderRun($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
};
