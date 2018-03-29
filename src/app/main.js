function mainController($document, $log, $scope, $http, $location, $state, $window) {
  'ngInject';
  
  // $log.info('hello');

  // $scope.getClass = function (path) {
  //   $log.info($location.path());
  //   return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  // };
  // $scope.slickConfig = {
  //   enabled: true,
  //   autoplay: true,
  //   draggable: false,
  //   autoplaySpeed: 3000,
  //   method: {},
  //   event: {
  //     beforeChange: function (event, slick, currentSlide, nextSlide) {
  //     },
  //     afterChange: function (event, slick, currentSlide, nextSlide) {
  //     }
  //   }
  // };
  $scope.isdiplay = false;
  // $scope.showsearch = function () {
  //   $scope.isdiplay = !$scope.isdiplay;
  //   $log.info('clicks');
  // };

}

module.exports = {
  template: require('./main.html'),
  controller: mainController
};

