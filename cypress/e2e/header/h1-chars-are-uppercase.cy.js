describe('h1 style', () => {
    it('h1 chars are uppercase', () => {
      cy.visit('/');
  
      cy.get('h1', {matchCase: false})
        .should('have.css', 'text-transform', 'uppercase');     
    })
  })