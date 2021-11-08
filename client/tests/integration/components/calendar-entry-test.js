import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | calendar-entry', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        this.set('item', { title: "Wine Tasting", start: "2021-11-08 06:00:00", duration: "60" });

        await render(hbs`<CalendarEntry @item={{this.item}} />`);

        assert.dom(this.element).hasText("Wine Tasting - 12:00 AM to 1:00 AM");
    });
});
