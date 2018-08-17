define('migration/controllers/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    migratingFrom: ['Tally', 'QuickBooks', 'Xero'],
    orgFinder(migratingFrom) {}
  });
});