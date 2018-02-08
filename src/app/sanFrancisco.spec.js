var angular = require('angular');
require('angular-mocks');
var sanFrancisco = require('./sanFrancisco');

describe('sanFrancisco component', function () {
  beforeEach(function () {
    angular
      .module('sanFrancisco', ['app/sanFrancisco.html'])
      .component('sanFrancisco', sanFrancisco);
    angular.mock.module('sanFrancisco');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<sanFrancisco></sanFrancisco>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
