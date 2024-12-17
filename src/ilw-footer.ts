import { LitElement, html } from "lit";
// @ts-ignore
import styles from './ilw-footer.styles.css?inline';
import './ilw-footer.css';
import CampusLink from "./models/campus-link";

export class Footer extends LitElement {
    // @property({
    //     attribute: false
    // })
    // _data = undefined;
    static properties = {
        _data: { attribute: false }
    }

    static styles = styles;

    constructor() {
        super();
        this._data = undefined;
    }

    connectedCallback() {
        super.connectedCallback();
        this.loadData();
    }

    async loadData() {
        const resp = await fetch('https://cdn.brand.illinois.edu/data/footer.json');
        this._data = await resp.json();
    }

    renderCampusSections() {
        if (this._data === undefined) return;
        const sections = this._data.illinois.sections.map(section => {
            return html`<div class="section">
          <h3>${section.label}</h3>
          ${this.renderCampusLinks(section.links)}
        </div>`
        })
        return html`<div class="sections">${sections}</div>`
    }

    renderCampusLinks(links: CampusLink[]) {
        const listItems = links.map(link => {
            return html`<li><a href="${link.href}">${link.label}</a></li>`
        })
        return html`<ul>${listItems}</ul>`;
    }

    renderCampusFooter() {
        return html`
        <div class="campus section-container">
          <div class="campus section">
            <h2 class="logo">
              <a href="https://illinois.edu/">${wordmark}</a>
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
              <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">Privacy</a></li>
              <a href="https://illinois.edu/resources/website/copyright.html">Copyright</a></li>
              <a href="https://illinois.edu/resources/website/accessibility.html">Accessibility</a></li>
            </div>
          </div>
        </div>`;
    }

    renderSiteFooter() {
        return html`
        <div class="site section-container">
          <div class="site section">
            <div class="site-name">
              <slot name="site-name"></slot>
            </div>
            <div class="actions">
              <slot name="actions"></slot>
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
}

customElements.define('ilw-footer', Footer);