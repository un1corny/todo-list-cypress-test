describe('h1 text', () => {
  it('h1 text equals expected', () => {
    cy.visit('/');

    cy.get('h1')
      .invoke('text')
      .should('equal', 'Things To Do');
  })
})