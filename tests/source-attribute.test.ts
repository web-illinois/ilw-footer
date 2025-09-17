import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import { Footer } from "../src/ilw-footer";
import "../src/ilw-footer";

const sample = html`
  <ilw-footer data-testid="sample">
    <p slot="site-name"><a href="http://example.com/">Example Site Name</a></p>
  </ilw-footer>
`

const custom = html`
  <ilw-footer data-testid="custom" source="Example_Site">
    <p slot="site-name"><a href="http://example.com/">Example Site Name</a></p>
  </ilw-footer>
`

test('campus links use utm with default value', async () => {
    const expected = 'utm_source=Illinois_App&utm_medium=web&utm_campaign=Footer';

    const screen = render(sample);
    const element = screen.getByTestId('sample');
    const footer = element.element() as Footer;
    const links: HTMLAnchorElement[] = Array.from(
        footer.querySelectorAll('.section-container a')
    ) ?? [];
    const hrefs = links.map(l => l.getAttribute('href') ?? '');
    const actual = hrefs.every(h => expect(h).toContain(expected));
    expect(actual).toBeTruthy();
})

test('custom source reflected in utm values', async () => {
    const expected = 'utm_source=Example_Site&utm_medium=web&utm_campaign=Footer';

    const screen = render(custom);
    const element = screen.getByTestId('custom');
    const footer = element.element() as Footer;
    const links: HTMLAnchorElement[] = Array.from(
        footer.querySelectorAll('.section-container a')
    ) ?? [];
    const hrefs = links.map(l => l.getAttribute('href') ?? '');
    const actual = hrefs.every(h => expect(h).toContain(expected));
    expect(actual).toBeTruthy();
})