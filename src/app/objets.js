function objetsController() {
  this.text = 'My brand new component!';
}

module.exports = {
  template: require('./objets.html'),
  controller: objetsController
};

