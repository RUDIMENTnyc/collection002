function deskNavController($log, $scope, $location) {
  'ngInject';
  // this.text = 'My brand new component!';
  // $log.info($location);

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };
}

module.exports = {
  template: require('./deskNav.html'),
  controller: deskNavController
};

