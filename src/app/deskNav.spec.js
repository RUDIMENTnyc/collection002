var angular = require('angular');
require('angular-mocks');
var deskNav = require('./deskNav');

describe('deskNav component', function () {
  beforeEach(function () {
    angular
      .module('deskNav', ['app/deskNav.html'])
      .component('deskNav', deskNav);
    angular.mock.module('deskNav');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<deskNav></deskNav>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
