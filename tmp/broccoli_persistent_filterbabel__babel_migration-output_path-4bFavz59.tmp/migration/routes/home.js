define('migration/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    ajax: Ember.inject.service(),
    model() {
      return this.get('ajax').request('https://jsonplaceholder.typicode.com/todos/1');
    }
  });
});