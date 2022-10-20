describe('new item is added to list', () => {
  it('add typed text to list', () => {
    cy.visit('/');

    cy.get('[data-cy=input-new-item]')
      .type('Test{enter}');

    cy.get('[data-cy=list-item-content]')
      .should(($itemContent) => {
        expect($itemContent.last()).to.contain('Test');
      })
  })
})