'use strict';

class Manager2 extends BaseManager {
  constructor(parentManager){
    
    console.info('constructor Manager 2');
    
    
    var config = {
        scope: '#app-manager-2',
        selectors: {
            static: {
                input: 'input',
                okBtn: '#btn2',
                parentActionBtn: '#btn3'
            },
            dynamic: {}
        },
        data:{
            data1: 'abc'
        }
    };

    super(config);
    
    this.$scope.show();
    
    this.parentManager =parentManager;

    this.bindListeners(this.$selectors)
  }

  bindListeners ($sltrs) {
    console.info('bindListeners Manager2');
 
    $sltrs.okBtn.click(this.okBtn);
    
    $sltrs.parentActionBtn.click({msg: 'Parent action called from child manager'}, this.parentManager.showAlert);
  }
  
  okBtn () {
      console.info('Manager2 action');
  }

}
