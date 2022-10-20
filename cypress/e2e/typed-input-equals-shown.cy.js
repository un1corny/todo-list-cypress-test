describe('typing text in the input', () => {
  it('typed text equals shown', () => {
    cy.visit('/');

    cy.get('[data-cy=input-new-item]')
      .as('inputItem');

    cy.get('@inputItem')
      .should('have.value', '');

    cy.get('@inputItem')
      .type('Test');

    cy.get('@inputItem')
      .should('have.value', 'Test');
  })
})