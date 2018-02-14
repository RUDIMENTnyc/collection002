var angular = require('angular');
require('angular-mocks');
var collection001story = require('./collection001story');

describe('collection001story component', function () {
  beforeEach(function () {
    angular
      .module('collection001story', ['app/collection001story.html'])
      .component('collection001story', collection001story);
    angular.mock.module('collection001story');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<collection001story></collection001story>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
