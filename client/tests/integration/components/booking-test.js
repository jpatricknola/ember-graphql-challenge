import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | booking', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Booking />`);

    assert.dom(this.element).hasText('Great Choice! Book your reservation now First Name: Last Name: Make Reservation');

    // Template block usage:
    await render(hbs`
      <Booking>
      
      </Booking>
    `);

    assert.dom(this.element).hasText('Great Choice! Book your reservation now First Name: Last Name: Make Reservation');
  });
});
