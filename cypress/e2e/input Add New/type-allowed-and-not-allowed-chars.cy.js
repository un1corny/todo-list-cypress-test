describe('typing chars in the input', () => {
  beforeEach('open the page and find the input', () => {
    cy.visit('/');
    cy.get('[data-cy=input-new-item]')
      .as('inputItem')
  });

  it('allows input 1 char and allows letters', () => {
    cy.get('@inputItem')
      .type('o')
      .should('have.value', 'o')
  });

  it('allows input 5 chars', () => {
    cy.get('@inputItem')
      .type('chars')
      .should('have.value', 'chars')
  });

  it('allows input 9 chars', () => {
    cy.get('@inputItem')
      .type('chocolate')
      .should('have.value', 'chocolate')
  });

  it('allows input 10 chars', () => {
    cy.get('@inputItem')
      .type('buy a gift')
      .should('have.value', 'buy a gift')
  });

  it('doesnt allow input 11 chars', () => {
    cy.get('@inputItem')
      .type('showjumping')
      .should('have.value', 'showjumpin')
  });

  it('doesnt allow input 20 chars', () => {
    cy.get('@inputItem')
      .type('I desire showjumping')
      .should('have.value', 'I desire s')
  });

  it('allows input special chars', () => {
    cy.get('@inputItem')
      .type('?!')
      .should('have.value', '?!')
  });

  it('allows input numbers', () => {
    cy.get('@inputItem')
      .type('123')
      .should('have.value', '123')
  })
})