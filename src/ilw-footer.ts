import { CSSResult, CSSResultGroup, LitElement, PropertyValues, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-footer.styles.css?inline';
import './ilw-footer.css';
import { default as wordmark } from "./wordmark.svg"
import { property, queryAssignedElements } from "lit/decorators.js";
import { CampusFooterData, CampusFooterSection, CampusLink } from "./models/campus-footer-data";

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
              <slot name="cookies-button"></slot>
              <a href="https://www.vpaa.uillinois.edu/resources/web_privacy?${this._utm}">Privacy</a></li>
              <a href="https://illinois.edu/resources/website/copyright.html?${this._utm}">Copyright</a></li>
              <a href="https://illinois.edu/resources/website/accessibility.html?${this._utm}">Accessibility</a></li>
            </div>
          </div>
        </div>`;
  }

  renderSiteFooter() {
    // site name, social media icons, address, phone, email,  primary unit.
    return html`
        <div class="site section-container">
          <div class="site section">
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
    const actions = this._actions;
    console.debug({ actions });
    if (this._actions === null || this._actions === undefined || this._actions.length <= 0) {
      console.debug('actions is empty. redefine grid');
      this.redefineGridLayout();
      return;
    }

    const slot = this._actions[0] as HTMLDivElement;
    console.debug({ slot });

    if (slot.children.length <= 0) {
      console.debug('no actions. redefine grid');
      this.redefineGridLayout();
    }
  }

  private generateUtm(): string {
    const utm = `utm_source=${this.source}&utm_medium=web&utm_campaign=Footer`;
    return utm;
  }

  private redefineGridLayout(): void {
    console.debug('redefining grid layout');
  }
}

customElements.get('ilw-footer') || customElements.define('ilw-footer', Footer);