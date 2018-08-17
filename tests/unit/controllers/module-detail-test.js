import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | module-detail', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:module-detail');
    assert.ok(controller);
  });
});
