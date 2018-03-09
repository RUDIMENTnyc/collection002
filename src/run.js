module.exports = runConfig;

/** @ngInject */
function runConfig(
  $rootScope,
  $state,
  $stateParams,
  $timeout,
  $location,
  $uiViewScroll,
  $window,
  $log) {

  // $rootScope.$state = $state;
  // $rootScope.$stateParams = $stateParams;

  // var deregLocChangeCallback = $rootScope.$on('$locationChangeStart', function () {
  //   Object.keys($window).filter(function (k) { 
  //     return k.indexOf('google') >= 0;
  //   }).forEach(function (key) {
  //     delete ($window[key]);
  //   });
  // });
  
  // Scrolling when screen changed.
  var deregLoadedCallback = $rootScope.$on('$viewContentLoaded', function () {
    $timeout($window.scrollTo(0, 0), 0);
    $log.info('word');
    
  });

  // var deregStartCallback = $rootScope.$on('$stateChangeStart', function (evt, to, params) {
  //   $log.info("stateChangeStart redirectTo", to.redirectTo);
  //   if (angular.isDefined(to.redirectTo)) {
  //     $log.info("if redirect is undefined");
  //     evt.preventDefault();
  //     $state.go(to.redirectTo, params);
  //   }
  // });
 
  // var deregSuccessallback = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
  //   $log.info("onChangeSuccess", toState);
  //   $state.current = toState;

  // });

  // $rootScope.$on('$destroy', deregStartCallback);
  // $rootScope.$on('$destroy', deregSuccessallback);
  $rootScope.$on('$destroy', deregLoadedCallback);
  // $rootScope.$on('$destroy', deregLocChangeCallback);
}

