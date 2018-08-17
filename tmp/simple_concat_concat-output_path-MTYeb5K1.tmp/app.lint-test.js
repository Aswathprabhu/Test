QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/card-compo.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/card-compo.js should pass ESLint\n\n');
});

QUnit.test('components/loader-compo.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/loader-compo.js should pass ESLint\n\n10:16 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n10:16 - \'$\' is not defined. (no-undef)\n16:6 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n16:6 - \'$\' is not defined. (no-undef)\n17:6 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n17:6 - \'$\' is not defined. (no-undef)');
});

QUnit.test('components/nav-bar.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/nav-bar.js should pass ESLint\n\n');
});

QUnit.test('components/search-box.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/search-box.js should pass ESLint\n\n');
});

QUnit.test('controllers/home.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/home.js should pass ESLint\n\n8:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n9:13 - \'migratingFrom\' is defined but never used. (no-unused-vars)\n14:23 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n14:23 - \'$\' is not defined. (no-undef)\n30:13 - Unexpected console statement. (no-console)\n32:24 - \'err\' is defined but never used. (no-unused-vars)');
});

QUnit.test('controllers/migrations.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/migrations.js should pass ESLint\n\n6:1 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
});

QUnit.test('controllers/module-detail.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/module-detail.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'router.js should pass ESLint\n\n12:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)');
});

QUnit.test('routes/home.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/home.js should pass ESLint\n\n');
});

QUnit.test('routes/migrations.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/migrations.js should pass ESLint\n\n');
});

QUnit.test('routes/module-detail.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/module-detail.js should pass ESLint\n\n4:9 - \'params\' is defined but never used. (no-unused-vars)');
});

QUnit.test('services/session.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'services/session.js should pass ESLint\n\n');
});

