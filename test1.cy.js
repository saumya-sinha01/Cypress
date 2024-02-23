/// <reference types="cypress"/>
it('Google search', function()
{
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('automation step by step{Enter}')
    cy.wait(2000)
    //cy.contains('Google Search').click()
})