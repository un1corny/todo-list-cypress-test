describe('check default focus when open the app', () => {
  it('input add new is default focused', () => {
    cy.visit('/');

    cy.get('[data-cy=input-new-item]')
      .should('have.focus');
  })
})