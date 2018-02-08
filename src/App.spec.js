var angular = require('angular');
require('angular-mocks');
var app = require('./App');

describe('app component', function () {
  beforeEach(function () {
    angular
      .module('app', ['app/App.html'])
      .component('app', app);
    angular.mock.module('app');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app></app>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
