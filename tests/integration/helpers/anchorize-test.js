import { module, test } from 'qunit';
import { setupRenderingTest } from 'conf-schedule/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | anchorize', function (hooks) {
  setupRenderingTest(hooks);

  test('it anchorizes two-part names', async function (assert) {
    await render(hbs`{{anchorize 'Yehuda Katz'}}`);

    assert.equal(this.element.textContent, 'yehuda-katz');
  });

  test('three-part names', async function (assert) {
    await render(hbs`{{anchorize 'Samanta de Barros'}}`);

    assert.equal(this.element.textContent, 'samanta-de-barros');
  });

  test('names with periods', async function (assert) {

    await render(hbs`{{anchorize 'James C. Davis'}}`);

    assert.equal(this.element.textContent, 'james-c-davis');
  });

  test('names with hyphens', async function (assert) {

    await render(hbs`{{anchorize 'Anne-Greeth van Herwijnen'}}`);

    assert.equal(this.element.textContent, 'annegreeth-van-herwijnen');
  });
});
