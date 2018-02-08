var angular = require('angular');
require('angular-mocks');
var chicago = require('./chicago');

describe('chicago component', function () {
  beforeEach(function () {
    angular
      .module('chicago', ['app/chicago.html'])
      .component('chicago', chicago);
    angular.mock.module('chicago');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<chicago></chicago>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
