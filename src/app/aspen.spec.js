var angular = require('angular');
require('angular-mocks');
var aspen = require('./aspen');

describe('aspen component', function () {
  beforeEach(function () {
    angular
      .module('aspen', ['app/aspen.html'])
      .component('aspen', aspen);
    angular.mock.module('aspen');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<aspen></aspen>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
