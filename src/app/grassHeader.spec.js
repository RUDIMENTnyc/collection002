var angular = require('angular');
require('angular-mocks');
var grassHeader = require('./grassHeader');

describe('grassHeader component', function () {
  beforeEach(function () {
    angular
      .module('grassHeader', ['app/grassHeader.html'])
      .component('grassHeader', grassHeader);
    angular.mock.module('grassHeader');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<grassHeader></grassHeader>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
