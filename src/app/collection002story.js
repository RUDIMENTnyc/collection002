function collection002storyController($log, $scope, $state) {
  'ngInject';
  // this.text = 'collection002';
  $scope.$watch(function () {
    return $state.$current.name;
  }, function (newVal, oldVal) {
    $log.info('--');
  });
}

module.exports = {
  template: require('./collection002story.html'),
  controller: collection002storyController
};

