define('migration/router', ['exports', 'migration/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('migrations');
    this.route('moduleDetail', { path: 'migrations/:migration_id' });
  });

  exports.default = Router;
});