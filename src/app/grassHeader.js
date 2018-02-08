function grassHeaderController($log, $scope) {
  var slide = false;
  
  $scope.someMethod = function () {
    // $log.info('woop');
    if (angular.element('#slidePanel').hasClass('ng-hide')) {
      $log.info('yes');
      angular.element('#nav-icon4').addClass('open');
    } else {
      $log.info('nope');
      // $log.info('poow', angular.element('#slidePanel'));
      angular.element('#nav-icon4').removeClass('open');
    }
    // angular.element('#nav-icon4').addClass('open');
  };

  // $scope.$watch(
  //   function ($scope) {
  //     // angular.element('#nav-icon4').addClass('');
  //     // $log.info('watchin');
  //     if (angular.element('.animate-slide').hasClass('ng-hide')) {
  //       $log.info('has hide');
  //       // angular.element('#nav-icon4').addClass('open');
  //     } else {
  //       $log.info('no hide');
  //       // angular.element('#nav-icon4').removeClass('open');
  //     }
  //   }
  // );

}

module.exports = {
  template: require('./grassHeader.html'),
  controller: grassHeaderController
};
