define("migration/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({
    findAll: function (store, type, id) {
      return this.ajax("https://cors-test.appspot.com/test", "POST", {
        // CORS
        crossDomain: true,
        xhrFields: { withCredentials: true }
      }).then(function (json) {
        // Massage this demo API endpoint to look like RESTAdapter expects.
        return { things: [json] };
      });
    }
  });
});