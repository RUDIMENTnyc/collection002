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

    .state('collection002', {
      url: '/collection002',
      component: 'collection002'
    })

    .state('collection002story', {
      url: '/collection002-story',
      component: 'collection002story'
    })

    .state('collection001', {
      url: '/collection001',
      component: 'collection001'
    })

    .state('collection001story', {
      url: '/collection001-story',
      component: 'collection001story'
    })

    .state('objets', {
      url: '/objets',
      component: 'objets'
    })

    .state('brand', {
      url: '/brand',
      component: 'brand'
    });
}
