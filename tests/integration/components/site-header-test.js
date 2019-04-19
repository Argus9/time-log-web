import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{site-header}}`);

    assert.ok(this.element.textContent.trim().includes('TimeLog'), "component should include TimeLog");
    assert.ok(this.element.textContent.trim().includes('Sign In'), "component should include Sign In");
  });
});
