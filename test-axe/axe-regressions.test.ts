import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility regressions scan', () => {
    test('regression test (#26): action button text has sufficient contrast', async ({ page }) => {
        await page.goto('./tests/html/regressions.html');

        const scanner = new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .include('.issue-26')
            .withRules('color-contrast');

        const results = await scanner.analyze();

        expect(results.violations.length === 0).toBeTruthy();
    });
});