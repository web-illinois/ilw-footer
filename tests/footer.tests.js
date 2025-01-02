import { test, expect } from '@playwright/test';

test('the footer contains a footer landmark', async ({ page }) => {
  await page.goto('samples/index.html');
  const val = await page.evaluate(() => {
    return document.querySelector('ilw-footer').shadowRoot.querySelector('footer');
  })
  await expect(val).not.toBeNull();
})