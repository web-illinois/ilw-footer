import { test, expect } from '@playwright/test';

test('the footer contains a footer landmark', async ({ page }) => {
  await page.goto('samples/index.html');
  const val = await page.evaluate(() => {
    return document.querySelector('ilw-footer').shadowRoot.querySelector('footer');
  })
  expect(val).not.toBeNull();
})

test('component handles multiple defines gracefully', async ({ page }) => {
  await page.goto('tests/html/double-import.html');
  await page.waitForLoadState('domcontentloaded');

  const footer = await page.evaluate(() => {
    return document.querySelector('ilw-footer').shadowRoot.querySelector('footer');
  });

  expect(footer).not.toBeNull();
})

test('component handles inheritance gracefully', async ({ page }) => {
  await page.goto('tests/html/double-import.html');
  await page.waitForLoadState('domcontentloaded');

  const tester = await page.evaluate(() => {
    return document.querySelector('test-footer').shadowRoot.querySelector('#testFooter');
  });

  expect(tester).not.toBeNull();
})