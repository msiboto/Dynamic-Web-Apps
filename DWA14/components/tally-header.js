/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { html, css, LitElement } from '../libs/lit-html.js';

class TallyHeader extends LitElement {
  static styles = css`
     header{
    text-align: center;
  }
  
  .header__title{
    font-size: 3rem;
    color:var(--color-light-gray);
  }
  `;

  render() {
    return html`
      <header>
        <h1>Tally Count</h1>
      </header>
    `;
  }
}

customElements.define('tally-header', TallyHeader);