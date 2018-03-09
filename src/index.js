var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');

var App = require('./App');
var main = require('./app/main');
var brand = require('./app/brand');
var collection001 = require('./app/collection001');
var collection001story = require('./app/collection001story');
var collection002 = require('./app/collection002');
var collection002story = require('./app/collection002story');
var objets = require('./app/objets');
var deskNav = require('./app/deskNav');
var grassFooter = require('./app/grassFooter');
var grassHeader = require('./app/grassHeader');

var runConfig = require('./run');

require('./index.styl');
require('angular-animate');
// require('ng-parallax');
// require('angular-slick-carousel');
var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ngAnimate'])
  .config(routesConfig)
  .component('app', App)
  .component('grassHeader', grassHeader)
  .component('grassFooter', grassFooter)
  .component('deskNav', deskNav)
  .component('main', main)
  .component('brand', brand)
  .component('collection001', collection001)
  .component('collection001story', collection001story)
  .component('collection002', collection002)
  .component('collection002story', collection002story)
  .component('objets', objets)
  .run(runConfig);
