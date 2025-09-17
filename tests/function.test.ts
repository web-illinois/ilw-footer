import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-footer";

const sample = html`
  <ilw-footer>
    <p slot="site-name"><a href="http://example.com/">Example Site Name</a></p>
  </ilw-footer>
`

test('the footer contains a footer landmark', async () => {
  const screen = render(sample);
  const landmark = screen.getByRole("contentinfo");
  await expect.element(landmark).toBeVisible();
})