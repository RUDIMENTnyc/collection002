function appController() {
  'ngInject';
  this.text = 'My brand new component!';
}

module.exports = {
  template: require('./App.html'),
  controller: appController
};

