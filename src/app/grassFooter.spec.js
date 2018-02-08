var angular = require('angular');
require('angular-mocks');
var grassFooter = require('./grassFooter');

describe('grassFooter component', function () {
  beforeEach(function () {
    angular
      .module('grassFooter', ['app/grassFooter.html'])
      .component('grassFooter', grassFooter);
    angular.mock.module('grassFooter');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<grassFooter></grassFooter>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
