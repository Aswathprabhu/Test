define('migration/controllers/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    ajax: Ember.inject.service(),
    migratingFrom: ['Tally', 'QuickBooks', 'Xero'],
    orgFinder(migratingFrom) {},
    actions: {
      populateAuth() {
        this.set('auth', $("#authValue").text());
        this.get('ajax').request('http://localhost:8080/Migration/OrganizationList', {
          method: "POST",
          headers: { 'Access-Control-Allow-Origin': '*' },
          dataType: "jsonp",
          jsonp: false,
          cache: true,
          data: {
            authtoken: this.get('auth')
          },
          success: function (res) {
            console.log(JSON.parse(res));
          },
          error: function (err) {
            console.log(JSON.parse(err));
          }
        });
      }
    }
  });
});