import { CSSResultGroup, LitElement, PropertyValues, css, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-footer.styles.css?inline';
import './ilw-footer.css';
import { default as wordmark } from "./wordmark.svg"
import { property, queryAssignedElements } from "lit/decorators.js";
import { CampusFooterData, CampusFooterSection, CampusLink } from "./models/campus-footer-data";
import { classMap } from 'lit/directives/class-map.js';

export class Footer extends LitElement {
  private readonly _defaultSource = 'Illinois_App';

  @property({
    attribute: true,
    reflect: true,
  })
  source: string

  @property({
    attribute: false
  })
  _data?: CampusFooterData;

  @property({
    attribute: false,
  })
  _utm?: string

  @queryAssignedElements({ slot: 'actions' })
  _actions?: Array<HTMLDivElement>;

  @queryAssignedElements({ slot: 'cookies-button' })
  _cookiesButton?: Array<HTMLElement>

  @property({
    attribute: false
  })
  _sectionClasses = { 'section-grid--no-action': false }

  static get styles(): CSSResultGroup {
    return unsafeCSS(styles);
  }

  constructor() {
    super();
    this.source = this._defaultSource;
    this._data = undefined;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
    this._utm = this.generateUtm();
  }

  async loadData() {
    const resp = await fetch('https://cdn.brand.illinois.edu/data/footer.json');
    this._data = await resp.json();
  }

  renderCampusSections() {
    if (this._data === undefined) return;
    const sections = this._data.illinois.sections.map((section: CampusFooterSection) => {
      return html`<div class="section">
          <h3>${section.label}</h3>
          ${this.renderCampusLinks(section.links)}
        </div>`
    })
    return html`<div class="sections">${sections}</div>`
  }

  renderCampusLinks(links: CampusLink[]) {
    const listItems = links.map(link => {
      return html`<li><a href="${link.href}?${this._utm}">${link.label}</a></li>`
    })
    return html`<ul>${listItems}</ul>`;
  }

  renderCampusFooter() {
    return html`
        <div class="campus section-container">
          <div class="campus section">
            <h2 class="logo">
              <a href="https://illinois.edu/?${this._utm}">${wordmark}</a>
            </h2>
            ${this.renderCampusSections()}
          </div>
        </div>`;
  }

  renderLegalFooter() {
    return html`
        <div class="legal section-container">
          <div class="legal section">
            <div class="cookies-button-and-links">
              <slot name="cookies-button">
                <button slot="cookies-button" id="ot-sdk-btn" class="ot-sdk-show-settings ilw-button wigg-test">About Cookies</button>
              </slot>
              <a href="https://www.vpaa.uillinois.edu/resources/web_privacy?${this._utm}">Privacy</a>
              <a href="https://illinois.edu/copyright/?${this._utm}">Copyright</a>
              <slot name="legal-link"></slot>
              <a href="https://illinois.edu/about/accessibility/?${this._utm}">Accessibility</a>
            </div>
          </div>
        </div>`;
  }

  renderSiteFooter() {
    // site name, social media icons, address, phone, email,  primary unit.
    return html`
        <div class="site section-container">
          <div class="site section section-grid ${classMap(this._sectionClasses)}">
            <div class="site-name">
              <slot name="site-name"></slot>
            </div>
            
            <div class="contact">
              <div class="social">
                <slot name="social"></slot>
              </div>
              <div class="address">
                <slot name="address"></slot>
              </div>
              <div class="primary-unit">
                <slot name="primary-unit"></slot>
              </div>
            </div>
            <div class="actions">
              <slot name="actions"></slot>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </div>
        </div>`;
  }

  render() {
    return html`
        <footer class="footer">
          ${this.renderSiteFooter()}
          ${this.renderCampusFooter()}
          ${this.renderLegalFooter()}
        </footer>
      `
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    if (this._actions === undefined || this._actions.length <= 0 || this._actions[0].children.length <= 0) {
      this._sectionClasses["section-grid--no-action"] = true;
    }

    if (this._cookiesButton === undefined || this._cookiesButton.length === 0) {
      console.warn('No cookie banner found. Assigning standard Illinois cookie banner.')
      this.generateCookieBanner();
    }
  }

  private generateCookieBanner(): void {
    console.debug('loading script');
    const wrapper = document.createElement('script');
    wrapper.innerText = 'function OptanonWrapper() {}';
    this.shadowRoot?.appendChild(wrapper);

    const script = document.createElement('script');
    script.src = 'https://onetrust.techservices.illinois.edu/scripttemplates/otSDKStub.js';
    script.id = 'cookie-js';
    script.setAttribute('data-domain-script', 'uiuc');

    script.onload = () => {
      console.debug('debugging script attachment');
      const element = document.getElementById('ot-sdk-btn');
      const shadowElement = this.shadowRoot?.getElementById('ot-sdk-btn');
      console.debug({element}, {shadowElement});
    }

    this.shadowRoot?.appendChild(script);
  }

  private generateUtm(): string {
    const utm = `utm_source=${this.source}&utm_medium=web&utm_campaign=Footer`;
    return utm;
  }
}

customElements.get('ilw-footer') || customElements.define('ilw-footer', Footer);