"use strict";



;define('migration/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({});
});
;define('migration/app', ['exports', 'migration/resolver', 'ember-load-initializers', 'migration/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('migration/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define('migration/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
;define('migration/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define('migration/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('migration/components/card-compo', ['exports'], function (exports) {
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
;define('migration/components/loader-compo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    percent: null,
    index: null,
    init() {
      this._super(...arguments);

      var $ppc = $('.progress-pie-chart').eq(this.get('index'));
      var deg = 360 * this.get('percent') / 100;

      if (this.get('percent') > 50) {
        $ppc.addClass('gt-50');
      }
      $('.ppc-progress-fill').eq(this.get('index')).css('transform', 'rotate(' + deg + 'deg)');
      $('.ppc-percents span').eq(this.get('index')).html(this.get('percent') + '%');
    }

  });
});
;define('migration/components/nav-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('migration/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define('migration/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('migration/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define('migration/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define('migration/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define('migration/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define('migration/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define('migration/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define('migration/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('migration/components/search-box', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('migration/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('migration/controllers/home', ['exports'], function (exports) {
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
          xhrFields: {

            withCredentials: false
          },

          dataType: "jsonp",
          jsonp: false,
          cache: true,
          data: {
            "authtoken": this.get('auth')
          },
          success: function (res) {
            console.log(JSON.parse(res));
          },
          error: function (err) {
            //console.log(JSON.parse(err));
          }
        });
      }
    }
  });
});
;define('migration/controllers/migrations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    session: Ember.inject.service('Session'),
    moduleNamesMap: {
      tally: ["Chart Of Accounts", "Bank Accounts", "Currencies", "Opening Balance", "Taxes", "Contacts", "Items", "Estimates", "Sales Orders", "Invoices", "Credit Notes", "Expenses", "Purchase Orders", "Bills", "Vendor Payments", "Debit Notes"],
      quickbooks: ["Chart Of Accounts", "Taxes", "Tax Groups", "Contacts", "Items", "Estimates", "Sales Orders", "Invoices", "Credit Notes", "Debit Notes", "Refund Credits", "Customer Payments", "Bills", "Debit Notes", "Vendor Payments", "Expenses"],
      xero: ["Chart Of Accounts", "Currencies", "Opening Balance", "Contacts", "Items", "Invoices", "Customer Payments", "Credit Notes", "Apply Credit Notes", "Refund Credits", "Bills", "Vendor Payments", "Debit Notes", "Apply Debit Notes"]
    },
    migrateFrom: null,
    init() {
      this._super(...arguments);
      this.set('migrateFrom', this.get('moduleNamesMap')[this.get('session').getmigratingFrom()]);
    }
  });
});
;define('migration/controllers/module-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
;define('migration/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define('migration/helpers/app-version', ['exports', 'migration/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('migration/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
;define('migration/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define('migration/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define('migration/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
;define('migration/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define('migration/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define('migration/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define('migration/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define('migration/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define('migration/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define('migration/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define('migration/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define('migration/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define('migration/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define('migration/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
;define('migration/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('migration/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('migration/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
;define('migration/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define('migration/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'migration/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('migration/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('migration/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
;define('migration/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('migration/initializers/export-application-global', ['exports', 'migration/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("migration/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('migration/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('migration/router', ['exports', 'migration/config/environment'], function (exports, _environment) {
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
;define('migration/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    ajax: Ember.inject.service(),
    session: Ember.inject.service('Session'),
    model() {}
  });
});
;define('migration/routes/migrations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('migration/routes/module-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      return [];
    }
  });
});
;define('migration/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('migration/services/session', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    auth: null,
    orgId: null,
    migratingFrom: null,
    orgName: null,
    isRecentMigration: null,
    setAuth(value) {
      this.set('auth', value);
    },
    getAuth() {
      return this.get('auth');
    },
    setorgId(value) {
      this.set('orgId', value);
    },
    getorgId() {
      return this.get('orgId');
    },
    setmigratingFrom(value) {
      this.set('migratingFrom', value);
    },
    getmigratingFrom() {
      return "quickbooks";
    },
    setorgName(value) {
      this.set('orgName', value);
    },
    getorgName() {
      return this.get('orgName');
    },
    setisRecentMigration(value) {
      this.set('isRecentMigration', value);
    },
    getisRecentMigration() {
      return this.get('isRecentMigration');
    }
  });
});
;define('migration/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define("migration/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ao9C2ePC", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/application.hbs" } });
});
;define("migration/templates/components/card-compo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rHUM1ac4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"style\",\"float:left;min-height:30%;min-width:30%;\"],[11,\"class\",\"avenir tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5\"],[3,\"action\",[[22,0,[]],\"goToModule\",[23,[\"module\"]]]],[9],[0,\"\\n      \"],[1,[27,\"loader-compo\",null,[[\"percent\",\"index\"],[70,0]]],false],[0,\"\\n      \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"h5\"],[9],[1,[21,\"module\"],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \\n\"],[10],[0,\"\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/components/card-compo.hbs" } });
});
;define("migration/templates/components/loader-compo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "r90PvYfJ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"progress-pie-chart\"],[11,\"data-percent\",\"0\"],[9],[0,\"\\n\\n                  \"],[7,\"div\"],[11,\"class\",\"ppc-progress\"],[9],[0,\"\\n                      \"],[7,\"div\"],[11,\"class\",\"ppc-progress-fill\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                  \"],[7,\"div\"],[11,\"class\",\"ppc-percents\"],[9],[0,\"\\n                      \"],[7,\"div\"],[11,\"class\",\"pcc-percents-wrapper\"],[9],[0,\"\\n                        \"],[7,\"span\"],[9],[0,\"0%\"],[10],[0,\"\\n                      \"],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/components/loader-compo.hbs" } });
});
;define("migration/templates/components/nav-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qPHb7fz5", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"navbar-fixed\"],[9],[0,\"\\n\"],[7,\"nav\"],[9],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"nav-wrapper\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"style\",\"margin-top:2vh;margin-left:1vh;height:30px;width:80px;\"],[11,\"src\",\"http://localhost:4200/zoho.png\"],[11,\"class\",\"brand-logo\"],[11,\"alt\",\"brand-logo\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/components/nav-bar.hbs" } });
});
;define("migration/templates/components/search-box", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MQPgS0CL", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/components/search-box.hbs" } });
});
;define("migration/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2P/RFyNP", "block": "{\"symbols\":[\"name\",\"name\"],\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n\\n            \"],[7,\"div\"],[11,\"class\",\"form-wrapper\"],[9],[0,\"\\n\\n                \"],[7,\"div\"],[9],[0,\"\\n                    \"],[7,\"img\"],[11,\"class\",\"logo\"],[11,\"src\",\"http://localhost:4200/zoho.png\"],[11,\"alt\",\"logo\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n                \"],[7,\"form\"],[11,\"action\",\"./FileUploadHandler\"],[11,\"id\",\"form\"],[11,\"method\",\"post\"],[11,\"enctype\",\"multipart/form-data\"],[11,\"novalidate\",\"\"],[9],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"switch\"],[9],[0,\"\\n                        \"],[7,\"label\"],[9],[0,\"\\n                            Continue Recent Migration\\n                            \"],[7,\"input\"],[11,\"id\",\"checkbox\"],[11,\"name\",\"checkbox\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"lever\"],[9],[10],[0,\"\\n\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"alert\"],[9],[0,\"\\n\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"authToken\"],[9],[0,\"AuthToken\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[1,[27,\"input\",null,[[\"value\",\"id\",\"name\",\"type\",\"class\"],[[23,[\"auth\"]],\"authToken\",\"authToken\",\"text\",\"validate\"]]],false],[0,\"\\n                        \"],[7,\"span\"],[11,\"id\",\"sampleAuth\"],[11,\"class\",\"helper-text\"],[3,\"action\",[[22,0,[]],\"populateAuth\"]],[9],[0,\"Sample AuthToken\"],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"hide\"],[11,\"id\",\"authValue\"],[9],[0,\"7bf3c98d66076db5bd888dbc2ec851aa\"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"class\",\"left\"],[11,\"for\",\"orgId\"],[9],[0,\"Organization Id\"],[10],[0,\"\\n                            \"],[7,\"img\"],[11,\"class\",\"right\"],[11,\"src\",\"./loading.gif\"],[11,\"alt\",\"loading\"],[9],[10],[0,\"\\n                        \"],[10],[7,\"br\"],[9],[10],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[23,[\"doop\"]],[23,[\"doops\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"doops\"]]],null]],null]]],{\"statements\":[[0,\"                            \"],[1,[22,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"id\",\"migratingFromSelect\"],[11,\"class\",\"input-field\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"migratingFrom\"],[9],[0,\"Migrating From\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"searchPlaceholder\",\"onclose\",\"onchange\"],[[23,[\"migratingFrom\"]],[23,[\"prevOrg\"]],\"Type to Search...\",[27,\"action\",[[22,0,[]],[23,[\"orgFinder\"]]],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"prevOrg\"]]],null]],null]]],{\"statements\":[[0,\"                          \"],[1,[22,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"id\",\"fileInput\"],[11,\"class\",\"file-field input-field\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"file\"],[9],[0,\"File\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"btn\"],[9],[0,\"\\n                            \"],[7,\"span\"],[9],[0,\"File\"],[10],[0,\"\\n                            \"],[7,\"input\"],[11,\"name\",\"file\"],[11,\"id\",\"file\"],[11,\"accept\",\".xml,.zip\"],[11,\"required\",\"\"],[11,\"type\",\"file\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"file-path-wrapper\"],[9],[0,\"\\n                            \"],[7,\"input\"],[11,\"class\",\"file-path validate\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n\\n                        \"],[7,\"span\"],[11,\"class\",\"helper-text\"],[9],[0,\"\\n                            \"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://docs.zoho.com/file/8eny9e980830425bd455b9218e994419b6d87\"],[11,\"target\",\"_blank\"],[11,\"download\",\"\"],[9],[0,\"Sample File\"],[10],[10],[0,\"\\n                        \"],[10],[0,\"\\n\\n\\n                    \"],[10],[0,\"\\n\\n\\n                    \"],[7,\"button\"],[11,\"id\",\"submit-btn\"],[11,\"class\",\"btn waves-effect waves-light btn-center\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/home.hbs" } });
});
;define("migration/templates/migrations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GvtBPsHG", "block": "{\"symbols\":[\"module\"],\"statements\":[[1,[21,\"nav-bar\"],false],[0,\"\\n\"],[4,\"each\",[[23,[\"migrateFrom\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"card-compo\",null,[[\"module\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/migrations.hbs" } });
});
;define("migration/templates/module-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PQxmlja/", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nav-bar\"],false],[0,\"\\n\\n \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n   \"],[7,\"div\"],[11,\"style\",\"min-height:80vh\"],[11,\"class\",\"avenir bg-light-gray br3 pa3 ma4 bw2 shadow-5\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"col l5 m5 s12\"],[9],[0,\"\\n    \"],[1,[21,\"loader-compo\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"col l7 m7 s12\"],[9],[0,\"\\n  \"],[7,\"table\"],[11,\"class\",\"striped highlight\"],[9],[0,\"\\n   \"],[7,\"tbody\"],[9],[0,\"\\n     \"],[7,\"tr\"],[9],[0,\"\\n       \"],[7,\"td\"],[9],[0,\"Completed\"],[10],[0,\"\\n       \"],[7,\"td\"],[11,\"class\",\"completed-data\"],[9],[0,\"0\"],[10],[0,\"\\n     \"],[10],[0,\"\\n     \"],[7,\"tr\"],[9],[0,\"\\n       \"],[7,\"td\"],[9],[0,\"Success\"],[10],[0,\"\\n       \"],[7,\"td\"],[11,\"class\",\"success-data\"],[9],[0,\"0\"],[10],[0,\"\\n     \"],[10],[0,\"\\n     \"],[7,\"tr\"],[9],[0,\"\\n       \"],[7,\"td\"],[9],[0,\"Failure\"],[10],[0,\"\\n       \"],[7,\"td\"],[11,\"class\",\"failure-data\"],[9],[0,\"0\"],[10],[0,\"\\n     \"],[10],[0,\"\\n     \"],[7,\"tr\"],[9],[0,\"\\n       \"],[7,\"td\"],[11,\"colspan\",\"2\"],[11,\"style\",\"text-align:center;\"],[9],[10],[0,\"\\n     \"],[10],[0,\"\\n   \"],[10],[0,\"\\n\\n \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"col l12 m12 s12\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"failures\"],[9],[0,\"\\n\\n                \"],[7,\"ul\"],[11,\"id\",\"tabs-swipe-demo\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n\\n                    \"],[7,\"li\"],[11,\"class\",\"tab col s3\"],[9],[7,\"a\"],[11,\"href\",\"#swipe-1\"],[9],[0,\"Error View\"],[10],[10],[0,\"\\n                    \"],[7,\"li\"],[11,\"class\",\"tab col s3\"],[9],[7,\"a\"],[11,\"href\",\"#swipe-2\"],[9],[0,\"Data View\"],[10],[10],[0,\"\\n\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"id\",\"swipe-1\"],[11,\"class\",\"col s12\"],[9],[0,\"\\n                    \"],[7,\"ul\"],[11,\"class\",\"collapsible popout\"],[9],[0,\"\\n                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n                    \"],[10],[0,\"\\n\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"id\",\"swipe-2\"],[11,\"class\",\"col s12\"],[9],[0,\"\\n                    \"],[7,\"ul\"],[11,\"class\",\"collapsible popout\"],[9],[0,\"\\n                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/module-detail.hbs" } });
});
;

;define('migration/config/environment', [], function() {
  var prefix = 'migration';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("migration/app")["default"].create({"name":"migration","version":"0.0.0"});
          }
        
//# sourceMappingURL=migration.map
