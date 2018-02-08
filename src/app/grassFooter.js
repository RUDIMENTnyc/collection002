function grassFooterController() {
  this.text = 'My brand new component!';
}

module.exports = {
  template: require('./grassFooter.html'),
  controller: grassFooterController
};

