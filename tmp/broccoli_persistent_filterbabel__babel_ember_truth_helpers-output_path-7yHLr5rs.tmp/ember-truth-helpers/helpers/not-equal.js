define('ember-truth-helpers/helpers/not-equal', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.notEqualHelper = notEqualHelper;
  function notEqualHelper(params) {
    return params[0] !== params[1];
  }

  exports.default = Ember.Helper.helper(notEqualHelper);
});