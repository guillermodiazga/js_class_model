'use strict';

class Manager2 extends BaseManager {
  constructor(config){
    config = config instanceof Object ? config : {};
    
    console.info('constructor Manager 2');

    config.scope = '#app-manager-2';
    config.selectors = {
        static: {
            input: 'input',
            okBtn: '#btn2',
            parentActionBtn: '#btn3'
        },
        dynamic: {}
    };

    super(config);

    this.$scope.show();

    this.bindListeners(this.$selectors)
  }

  bindListeners($sltrs) {
    console.info('bindListeners Manager2');
 
    $sltrs.okBtn.click(this.okBtn);
    
    $sltrs.parentActionBtn.click({msg: 'Parent action called from child manager'}, this.parentManager.showAlert);
  }
  
  okBtn () {
      console.info('Manager2 action');
  }
  
  welcome() {
    console.info('Welcome Manager2');
  }

}
