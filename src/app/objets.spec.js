var angular = require('angular');
require('angular-mocks');
var objets = require('./objets');

describe('objets component', function () {
  beforeEach(function () {
    angular
      .module('objets', ['app/objets.html'])
      .component('objets', objets);
    angular.mock.module('objets');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<objets></objets>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
