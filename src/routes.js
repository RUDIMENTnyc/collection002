module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })

    .state('main', {
      url: '/main',
      component: 'main'
    })

    .state('aspen', {
      url: '/aspen',
      component: 'aspen'
    })

    .state('sanFrancisco', {
      url: '/san-francisco',
      component: 'sanFrancisco'
    })

    .state('chicago', {
      url: '/chicago',
      component: 'chicago'
    });
}
