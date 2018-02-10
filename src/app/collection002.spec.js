var angular = require('angular');
require('angular-mocks');
var collection002 = require('./collection002');

describe('collection002 component', function () {
  beforeEach(function () {
    angular
      .module('collection002', ['app/collection002.html'])
      .component('collection002', collection002);
    angular.mock.module('collection002');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<collection002></collection002>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
