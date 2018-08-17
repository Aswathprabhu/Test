define('migration/components/card-compo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    module: null,
    actions: {
      goToModule(module) {
        this.get('goToModule')(module);
      }
    }
  });
});