import { LitElement, html } from 'lit-element';

class AuthorProfile extends LitElement {
  static get properties() {
    return {
      author: { type: Object },
      books: { type: Array },
    };
  }

  render() {
    return html`
      <div>${this.author.name}</div>
      <div>${this.books.map(book => html`<li>${book.title}</li>`)}
    `;
  }
}

customElements.define('author-profile', AuthorProfile);