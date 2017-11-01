'use strict';

class BaseManager {
    constructor(config) {
      config = config instanceof Object ? config : {};
      
      console.info('super constructor');
      
      this.$selectors = {};
      this.$scope = $(config.scope);
      this.initSelectors(config);
      this.parentManager = config.parentManager;
    }

    initSelectors(config) {

      console.info('Super initSelectors');

      try {
        var $selectors = {};
        if (config.selectors.hasOwnProperty('static')) {
          $.each(config.selectors.static, function(e) {
            config.selectors[e]  = config.selectors.static[e];
            $selectors[e] = $(config.selectors.static[e], this.$scope);
          });
        }

        if (config.selectors.hasOwnProperty('dynamic')) {
          $.each(config.selectors.dynamic, function(e) {
            config.selectors[e]  = config.selectors.dynamic[e];
            $selectors[e] = function() {
              return $(config.selectors.dynamic[e], this.$scope);
            };
          });
        }
        this.$selectors = $selectors;
      } catch(e) {
        console.error('Error: Init selectors ' + e)
      }
    }
    
 // 
  getManager(manager) {
    try {

        var isInstanced = this.managers[manager] instanceof eval(manager);

        return this.managers[manager] = (isInstanced) ? this.managers[manager] :  new this.managers[manager]({parentManager: this});
    } catch(e) {
        console.error('Error creating the instance ' + manager + ': ' + e);
    }
  }

}

