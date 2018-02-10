var angular = require('angular');
require('angular-mocks');
var collection001 = require('./collection001');

describe('collection001 component', function () {
  beforeEach(function () {
    angular
      .module('collection001', ['app/collection001.html'])
      .component('collection001', collection001);
    angular.mock.module('collection001');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<collection001></collection001>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
