import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-footer";

const sample = html`
  <ilw-footer>
    <p slot="site-name"><a href="http://example.com/">Example Site Name</a></p>
  </ilw-footer>
`

const custom = html`
  <ilw-footer>
    <p slot="site-name"><a href="http://example.com/">Example Site Name</a></p>
    <button slot="cookies-button" data-testid="cookies">Test Cookies</button>
  </ilw-footer>
`

test('the footer contains a footer landmark', async () => {
  const screen = render(sample);
  const landmark = screen.getByRole("contentinfo");
  await expect.element(landmark).toBeVisible();
});

test('footer adds a cookie button if none has been slotted', async () => {
  const screen = render(sample);
  const button = screen.getByText('About Cookies');
  await expect.element(button).toBeVisible();
});

test('footer allows slotted cookie button', async () => {
  const screen = render(custom);
  const button = screen.getByTestId('cookies');
  await expect.element(button).toBeVisible();
});

