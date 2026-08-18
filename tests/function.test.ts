import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import { fixture } from "@open-wc/testing-helpers";
import "../src/ilw-footer";
import { Footer } from "../src/ilw-footer";

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

test('Campus data loads in footer', async () => {
  const element = await fixture(sample);
  const landmark = element.querySelectorAll('div.legal.section');
  expect(landmark).not.toBeNull();
});

test('the footer contains a footer landmark', async () => {
  const element = await fixture(sample);
  const landmark = element.shadowRoot?.querySelector('footer');
  expect(landmark).toBeVisible();
});

test('footer adds a cookie button if none has been slotted', async () => {
  const expected = 0;
  const element: Footer = await fixture(sample);
  const cookiesProp = element._cookiesButton ?? [];
  const actual = cookiesProp.length;
  expect(actual).to.equal(expected);
});

test('footer allows slotted cookie button', async () => {
  const expected = 'Test Cookies';
  const element: Footer = await fixture(custom);
  const buttons = Array.from(element.querySelectorAll('button'));
  const button = buttons.find(element => { element.innerText === expected });
  expect(button).not.toBeNull();
});