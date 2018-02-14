var angular = require('angular');
require('angular-mocks');
var collection002story = require('./collection002story');

describe('collection002story component', function () {
  beforeEach(function () {
    angular
      .module('collection002story', ['app/collection002story.html'])
      .component('collection002story', collection002story);
    angular.mock.module('collection002story');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<collection002story></collection002story>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
