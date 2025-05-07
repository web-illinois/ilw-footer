import { test, expect } from '@playwright/test';

test('the footer contains a footer landmark', async ({ page }) => {
  await page.goto('samples/index.html');
  const val = await page.evaluate(() => {
    return document.querySelector('ilw-footer').shadowRoot.querySelector('footer');
  })
  await expect(val).not.toBeNull();
})

test('component won\'t try to define itself twice', async ({ page }) => {
  const script = `
    import { Footer } from 'lit';
    import { TestFooter } from 'ilw-footer';
    export default class TestFooter extends Footer {
        constructor() { super(); }
    };
    customElements.define('test-footer', TestFooter);
  `

  await page.addScriptTag({
    content: script,
    type: 'module'
  });

  await page.goto('samples/index.html');
  const val = await page.evaluate(() => {
    return document.querySelector('ilw-footer').shadowRoot.querySelector('footer');
  });

  expect(val).not.toBeNull();
})