import { CopyToClipboard } from '../src';

describe('CopyToClipboard', () => {
  it('renders', () => {
    cy.mount(
      <CopyToClipboard text="Copy content">
        <span>Copy content</span>
      </CopyToClipboard>
    );
    cy.get('[data-test-id="copy-to-clipboard"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <CopyToClipboard text="Copy content">
        <span>Copy content</span>
      </CopyToClipboard>
    );
    cy.checkA11y();
  });
});