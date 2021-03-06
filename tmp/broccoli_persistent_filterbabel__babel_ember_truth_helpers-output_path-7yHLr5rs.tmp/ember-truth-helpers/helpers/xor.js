define('ember-truth-helpers/helpers/xor', ['exports', 'ember-truth-helpers/utils/truth-convert'], function (exports, _truthConvert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.xor = xor;
  function xor(params) {
    return (0, _truthConvert.default)(params[0]) !== (0, _truthConvert.default)(params[1]);
  }

  exports.default = Ember.Helper.helper(xor);
});