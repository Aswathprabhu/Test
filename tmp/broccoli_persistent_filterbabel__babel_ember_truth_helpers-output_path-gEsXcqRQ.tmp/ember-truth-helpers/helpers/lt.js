define('ember-truth-helpers/helpers/lt', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lt = lt;
  function lt(params, hash) {
    let left = params[0];
    let right = params[1];
    if (hash.forceNumber) {
      if (typeof left !== 'number') {
        left = Number(left);
      }
      if (typeof right !== 'number') {
        right = Number(right);
      }
    }
    return left < right;
  }

  exports.default = Ember.Helper.helper(lt);
});