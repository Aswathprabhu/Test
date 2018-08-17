define("migration/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4T5/UfwH", "block": "{\"symbols\":[\"name\",\"name\"],\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n\\n            \"],[7,\"div\"],[11,\"class\",\"form-wrapper\"],[9],[0,\"\\n\\n                \"],[7,\"div\"],[9],[0,\"\\n                    \"],[7,\"img\"],[11,\"class\",\"logo\"],[11,\"src\",\"http://localhost:8080/images/zoho.png\"],[11,\"alt\",\"logo\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n\\n\\n\\n                \"],[7,\"form\"],[11,\"action\",\"./FileUploadHandler\"],[11,\"id\",\"form\"],[11,\"method\",\"post\"],[11,\"enctype\",\"multipart/form-data\"],[11,\"novalidate\",\"\"],[9],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"switch\"],[9],[0,\"\\n                        \"],[7,\"label\"],[9],[0,\"\\n                            Continue Recent Migration\\n                            \"],[7,\"input\"],[11,\"id\",\"checkbox\"],[11,\"name\",\"checkbox\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"lever\"],[9],[10],[0,\"\\n\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"alert\"],[9],[0,\"\\n\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"authToken\"],[9],[0,\"AuthToken\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"input\"],[11,\"id\",\"authToken\"],[11,\"name\",\"authToken\"],[11,\"class\",\"validate\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"id\",\"sampleAuth\"],[11,\"class\",\"helper-text\"],[9],[0,\"Sample AuthToken\"],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"hide\"],[11,\"id\",\"authValue\"],[9],[0,\"7bf3c98d66076db5bd888dbc2ec851aa\"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"class\",\"left\"],[11,\"for\",\"orgId\"],[9],[0,\"Organization Id\"],[10],[0,\"\\n                            \"],[7,\"img\"],[11,\"class\",\"right\"],[11,\"src\",\"./images/loading.gif\"],[11,\"alt\",\"loading\"],[9],[10],[0,\"\\n                        \"],[10],[7,\"br\"],[9],[10],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[23,[\"doop\"]],[23,[\"doops\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"doops\"]]],null]],null]]],{\"statements\":[[0,\"                            \"],[1,[22,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"id\",\"migratingFromSelect\"],[11,\"class\",\"input-field\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"migratingFrom\"],[9],[0,\"Migrating From\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"searchPlaceholder\",\"onclose\",\"onchange\"],[[23,[\"migratingFrom\"]],[23,[\"prevOrg\"]],\"Type to Search...\",[27,\"action\",[[22,0,[]],[23,[\"orgFinder\"]]],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"prevOrg\"]]],null]],null]]],{\"statements\":[[0,\"                          \"],[1,[22,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[10],[0,\"\\n\\n                    \"],[7,\"div\"],[11,\"id\",\"fileInput\"],[11,\"class\",\"file-field input-field\"],[9],[0,\"\\n                        \"],[7,\"div\"],[9],[0,\"\\n                            \"],[7,\"label\"],[11,\"for\",\"file\"],[9],[0,\"File\"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"btn\"],[9],[0,\"\\n                            \"],[7,\"span\"],[9],[0,\"File\"],[10],[0,\"\\n                            \"],[7,\"input\"],[11,\"name\",\"file\"],[11,\"id\",\"file\"],[11,\"accept\",\".xml,.zip\"],[11,\"required\",\"\"],[11,\"type\",\"file\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"file-path-wrapper\"],[9],[0,\"\\n                            \"],[7,\"input\"],[11,\"class\",\"file-path validate\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                        \"],[10],[0,\"\\n\\n                        \"],[7,\"span\"],[11,\"class\",\"helper-text\"],[9],[0,\"\\n                            \"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://docs.zoho.com/file/8eny9e980830425bd455b9218e994419b6d87\"],[11,\"target\",\"_blank\"],[11,\"download\",\"\"],[9],[0,\"Sample File\"],[10],[10],[0,\"\\n                        \"],[10],[0,\"\\n\\n\\n                    \"],[10],[0,\"\\n\\n\\n                    \"],[7,\"button\"],[11,\"id\",\"submit-btn\"],[11,\"class\",\"btn waves-effect waves-light btn-center\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[10],[0,\"\\n                \"],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "migration/templates/home.hbs" } });
});