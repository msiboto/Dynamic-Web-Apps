/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { html, LitElement } from '../libs/lit-html.js';
import './tally-header.js';
import './tally-main.js';
import './tally-footer.js';

class TallyApp extends LitElement {
  render() {
    return html`
      <tally-header></tally-header>
      <tally-main></tally-main>
      <tally-footer></tally-footer>
    `;
  }
}

customElements.define('tally-app', TallyApp);