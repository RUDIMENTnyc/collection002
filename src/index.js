var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');

var App = require('./App');
var main = require('./app/main');
var chicago = require('./app/chicago');
var aspen = require('./app/aspen');
var sanFrancisco = require('./app/sanFrancisco');
var deskNav = require('./app/deskNav');
var grassFooter = require('./app/grassFooter');
var grassHeader = require('./app/grassHeader');

require('./index.styl');
require('angular-animate');
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
  .component('chicago', chicago)
  .component('aspen', aspen)
  .component('sanFrancisco', sanFrancisco);
