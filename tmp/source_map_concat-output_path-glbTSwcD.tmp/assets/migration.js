"use strict";



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
    model() {
      return this.get('ajax').request('https://jsonplaceholder.typicode.com/todos/1');
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
;define("migration/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ao9C2ePC", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/application.hbs" } });
});
;define("migration/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oLxZtctS", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n\\n            \"],[7,\"div\"],[11,\"class\",\"form-wrapper\"],[9],[0,\"\\n\\n                \"],[7,\"div\"],[9],[0,\"\\n                    \"],[7,\"img\"],[11,\"class\",\"logo\"],[11,\"src\",\"./images/zoho.png\"],[11,\"alt\",\"logo\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n\\n\\n\\n                \"],[7,\"form\"],[11,\"action\",\"./FileUploadHandler\"],[11,\"id\",\"form\"],[11,\"method\",\"post\"],[11,\"enctype\",\"multipart/form-data\"],[11,\"novalidate\",\"\"],[9],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"switch\"],[9],[0,\"\\n                        \"],[7,\"label\"],[9],[0,\"\\n                            Continue Recent Migration\\n                            \"],[7,\"input\"],[11,\"id\",\"checkbox\"],[11,\"name\",\"checkbox\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"lever\"],[9],[10],[0,\"\\n\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"alert\"],[9],[0,\"\\n\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"authToken\"],[9],[0,\"AuthToken\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"input\"],[11,\"id\",\"authToken\"],[11,\"name\",\"authToken\"],[11,\"class\",\"validate\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"id\",\"sampleAuth\"],[11,\"class\",\"helper-text\"],[9],[0,\"Sample AuthToken\"],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"hide\"],[11,\"id\",\"authValue\"],[9],[0,\"7bf3c98d66076db5bd888dbc2ec851aa\"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"class\",\"left\"],[11,\"for\",\"orgId\"],[9],[0,\"Organization Id\"],[10],[0,\"\\n                            \"],[7,\"img\"],[11,\"class\",\"right\"],[11,\"src\",\"./images/loading.gif\"],[11,\"alt\",\"loading\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"select\"],[11,\"name\",\"orgId\"],[11,\"id\",\"orgId\"],[11,\"required\",\"\"],[9],[0,\"\\n                            \"],[7,\"option\"],[11,\"value\",\"Select your Organization\"],[11,\"selected\",\"\"],[9],[0,\"Select your Organization\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"id\",\"migratingFromSelect\"],[11,\"class\",\"input-field\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"migratingFrom\"],[9],[0,\"Migrating From\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"select\"],[11,\"name\",\"migratingFrom\"],[11,\"id\",\"migratingFrom\"],[11,\"required\",\"\"],[9],[0,\"\\n                            \"],[7,\"option\"],[11,\"value\",\"tally\"],[11,\"selected\",\"\"],[9],[0,\"Tally\"],[10],[0,\"\\n                            \"],[7,\"option\"],[11,\"value\",\"quickbooks\"],[9],[0,\"QuickBooks\"],[10],[0,\"\\n                            \"],[7,\"option\"],[11,\"value\",\"xero\"],[9],[0,\"Xero\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"id\",\"fileInput\"],[11,\"class\",\"file-field input-field\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"file\"],[9],[0,\"File\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"btn\"],[9],[0,\"\\n                            \"],[7,\"span\"],[9],[0,\"File\"],[10],[0,\"\\n                            \"],[7,\"input\"],[11,\"name\",\"file\"],[11,\"id\",\"file\"],[11,\"accept\",\".xml,.zip\"],[11,\"required\",\"\"],[11,\"type\",\"file\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"file-path-wrapper\"],[9],[0,\"\\n                            \"],[7,\"input\"],[11,\"class\",\"file-path validate\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n\\n                        \"],[7,\"span\"],[11,\"class\",\"helper-text\"],[9],[0,\"\\n                            \"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://docs.zoho.com/file/8eny9e980830425bd455b9218e994419b6d87\"],[11,\"target\",\"_blank\"],[11,\"download\",\"\"],[9],[0,\"Sample File\"],[10],[10],[0,\"\\n                        \"],[10],[0,\"\\n\\n\\n                    \"],[10],[0,\"\\n\\n\\n                    \"],[7,\"button\"],[11,\"id\",\"submit-btn\"],[11,\"class\",\"btn waves-effect waves-light btn-center\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n     \\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/home.hbs" } });
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
