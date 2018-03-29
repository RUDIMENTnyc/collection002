function deskNavController($log, $scope, $location) {
  'ngInject';
  // this.text = 'My brand new component!';
  // $log.info($location);

  // $scope.getClass = function (path) {
  //   return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  // };
  // $scope.closeNav = function () {
  //   // showMenu = !showMenu
  //   $log.info('close nav');

  //   angular.element(document.querySelector('.primary-nav')).removeClass('showMenu');
  // };
}

module.exports = {
  template: require('./deskNav.html'),
  controller: deskNavController
};

