describe('attr placeholder text', () => {
  it('input placeholder text add new', () => {
    cy.visit('/');

    cy.get('[data-cy=input-new-item]')
      .invoke('attr', 'placeholder')
      .should('equals', 'Add New');
  })
})