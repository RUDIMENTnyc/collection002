var angular = require('angular');
require('angular-mocks');
var main = require('./main');

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('main', ['app/main.html'])
      .component('main', main);
    angular.mock.module('main');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<main></main>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
