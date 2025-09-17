import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import './components/test-footer';
import '../src/ilw-footer';

const test_footer = html`
    <test-footer data-testid="test"></test-footer>
`

test('component handles inheritance gracefully', async () => {
    const screen = render(test_footer);
    const element = screen.getByTestId('test');
    const text = element.getByText('Hello test footer');
    await expect.element(text).toBeInTheDocument();
})
