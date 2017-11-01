'use strict';

class Manager extends BaseManager {
  constructor(config) {
    console.info('constructor Manager');

    // Call super constructor to build the selectors
    super(config);
    
    var self = this;
    

    this.bindListeners(this.$selectors);

    console.info('instancia manager2');

    // Manager dependencies
    this.manager2 = null;
  }

  bindListeners($sltrs) {
    console.info('bindListeners');

    $sltrs.form.submit(this.submitForm);
    $sltrs.okBtn.click({self: this}, this.okBtn);
    $sltrs.loadManager2.click({self: this}, this.loadManager2);
  }

  okBtn(e) {
    var self = e.data.self;
    var _internalMethod = function (argument) {
        var value = self.$selectors.input.val();
        self.$selectors.input.val('');
        return 'action Manager: ' + value;
    }

    console.info(_internalMethod());
  }

  submitForm(e) {
      e.preventDefault();
  }

  getManager2() {
    return this.manager2 = this.manager2 || new Manager2(this);
  }

  loadManager2(e) {

      e.data.self.getManager2();
  } 
  
  showAlert(e) {

      alert(e.data.msg);
  }
  
  
}

