import { Footer } from '../../src/ilw-footer.ts';
import { html } from '../../node_modules/lit';

export default class TestFooter extends Footer {
    protected override TagName = 'test-footer';

    constructor() {
        super();
    }

    render() {
        return html`
        <p id='testFooter'>Hello test footer</p>
        `;
    }
}

customElements.get('test-footer') || customElements.define('test-footer', TestFooter);