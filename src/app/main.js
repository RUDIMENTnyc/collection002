function mainController($document, $log, $scope, $http, $location, $state, $window) {
  'ngInject';
  
  // $log.info('hello');

  // $scope.getClass = function (path) {
  //   $log.info($location.path());
  //   return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  // };

}

module.exports = {
  template: require('./main.html'),
  controller: mainController
};
