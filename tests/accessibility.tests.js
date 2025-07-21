import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Scan', () => {
    test('regression test (#26): action button text has sufficient contrast', async ({ page }) => {
        await page.goto('tests/html/accessibility.html');

        const scanner = new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .include('.issue-26')
            .withRules('color-contrast');

        const results = await scanner.analyze();
        const violations = results.violations;

        expect(violations).toEqual([]);
    });

    test('footer should pass all WCAG 2.1 AA automated scans', async ({ page }) => {
        await page.goto('tests/html/accessibility.html');
        await page.waitForLoadState('domcontentloaded');

        const scanner = new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);

        const results = await scanner.include({ fromShadowDom: ['footer'] }).analyze();
        console.debug({ results });

        // const scanner = new AxeBuilder({ page })
        //     .options({
        //         tags: [
        //             'wcag2a',
        //             'wcag2aa',
        //             'wcag21a',
        //             'wcag21aa'
        //         ],
        //         include: {
        //             fromShadowDom: ['.footer']
        //         },
        //         rules: {
        //             'color-contrast': { enabled: true }
        //         }
        //     });


        // const results = await scanner.analyze();
        // const contrast = results.passes.find(item => item.id === 'color-contrast');
        // const items = contrast.nodes;
        // console.debug({ items })
        const violations = results.violations;

        expect(violations).toEqual([]);
    });
});