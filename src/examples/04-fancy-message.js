import { LitElement, html } from 'lit-element';

class FancyMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      messagePrefix: { type: String },
    };
  }

  render() {
    return html`
      <div>${this.messagePrefix} ${this.message}</div>
    `;
  }
}

customElements.define('fancy-message', FancyMessage);