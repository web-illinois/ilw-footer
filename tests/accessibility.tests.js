import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Scan', () => {
    test('footer should pass all WCAG 2.1 AA automated scans', async ({ page }) => {
        await page.goto('tests/html/accessibility.html');

        const scanner = new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);

        const results = await scanner.analyze();
        const violations = results.violations;

        expect(violations).toEqual([]);
    });
});