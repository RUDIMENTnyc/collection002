var angular = require('angular');
require('angular-mocks');
var brand = require('./brand');

describe('brand component', function () {
  beforeEach(function () {
    angular
      .module('brand', ['app/brand.html'])
      .component('brand', brand);
    angular.mock.module('brand');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<brand></brand>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
