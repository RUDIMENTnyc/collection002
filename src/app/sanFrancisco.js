function sanFranciscoController() {
  this.text = 'My brand new component!';
}

module.exports = {
  template: require('./sanFrancisco.html'),
  controller: sanFranciscoController
};

