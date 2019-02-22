import { LitElement, html } from 'lit-element';
import './05-author-profile.js';

class PassingProperties extends LitElement {
  static get properties() {
    return {
      author: { type: Object },
      books: { type: Array }
    }
  }

  constructor() {
    super();
    this.author = { name: 'G.R.R. Martin', age: 70 };
    this.books = [
      { title: 'Game of Thrones', pages: 697 },
      { title: 'The Ice Dragon', pages: 521 }
    ];
  }

  /**
   * In lit-html, you can use template expressions (${}) to set properties and attributes
   * on elements with a similar syntax.
   */
  render() {
    return html`
      <div>- We come from "05-passing-properties.js" file!</div>
      <author-profile
        .author=${this.author}
        .books=${this.books}>
      </author-profile>
    `;
  }
}

customElements.define('passing-properties', PassingProperties);
