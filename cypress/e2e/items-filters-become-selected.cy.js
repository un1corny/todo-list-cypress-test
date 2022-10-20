describe('selected status of filters', () => {
  beforeEach('open the page', () => {
    cy.visit('/');
  })

  it('filter All selected default', () => {
    cy.get('.filters')
      .find('a')
      .contains('All')
      .should('have.class', 'selected')
      //.debug(); //use debug command to inspect the test if it fails
  });

  it('filter Active becomes selected on click', () => {
    cy.get('.filters')
      .find('a')
      .contains('Active')
      .click()
      .should('have.class', 'selected')
  });

  it('filter Completed becomes selected on click', () => {
    cy.get('.filters')
      .find('a')
      .contains('Completed')
      .click()
      .should('have.class', 'selected');
  })
})