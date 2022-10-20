describe('click and double-click an item', () => {
  beforeEach('open the page', () => {
    cy.visit('/');

    cy.get('[data-cy=list-item-content]')
      .as('listItem');
  })

  it('one click makes first item completed', () => {
    cy.get('@listItem').within(() => {
      cy.get('input')
        .eq(0)
        .click()
    });

    cy.get('.todo-item')
      .should('have.class', 'completed');
  })

  it('double-click makes first item pending', () => {
    cy.get('@listItem').within(() => {
      cy.get('input')
        .eq(0)
        .dblclick()
    });
    
    cy.get('.todo-item')
      .should('have.class', 'pending');
  })
})