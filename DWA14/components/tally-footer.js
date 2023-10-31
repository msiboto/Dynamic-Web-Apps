
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { css, html, LitElement } from '../libs/lit-html.js';


class TallyFooter extends LitElement {
    static styles = css`
    footer{
    color: var(--color-light-gray);
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.5rem;
    background: var(--color-dark-gray);
    
    align-self: flex-end;
    padding: 1rem;
    
  }
  
  footer a{
    color:#fff;
  }
 `;
 
  render() {
    return html`
      <footer>
        Inspired by
        <a class="footer__link" href="https://tallycount.app/">Tally Count</a>.
        Note that this is merely a student practice project for learning JavaScript.
      </footer>
    `;
  }
}

customElements.define('tally-footer', TallyFooter)