define('migration/components/card-compo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    routerService: Ember.inject.service('router'),
    module: null,
    actions: {
      goToModule(module) {
        let routerService = this.get('routerService');
        let url = routerService.urlFor('moduleDetail', module.replace(/\s/g, ''));
        window.open(url);
      }
    }
  });
});