'use strict';

class Manager extends BaseManager {
  constructor(config) {
    console.info('constructor Manager');

    config = config instanceof Object ? config : {};

    config.scope = '#app-manager-wrapper';

    config.selectors = {
            static: {
                form:  'form',
                input: '#text',
                okBtn: '#btn1',
                loadManager2: '#loadManager2'
            },
            dynamic: {}
        };

    // Call super constructor to build the selectors
    super(config);

    // Manager dependencies
    this.managers = {
        Manager2: Manager2
    };

    this.bindListeners(this.$selectors);
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

  loadManager2(e) {
    var self = e.data.self;

    // Create instance on Manager2
    self.getManager('Manager2').welcome();
  } 

  showAlert(e) {

      alert(e.data.msg);
  }
  
  
}

