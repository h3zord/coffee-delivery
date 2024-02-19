/// <reference types="cypress" />

describe('Data coffee request tests', () => {
  it('Testing if it returns status code and body correctly', async () => {
    cy.intercept('GET', 'http://localhost:3333/coffees').as('getCoffees')

    cy.visit('/')

    cy.wait('@getCoffees').its('response.statusCode').should('eq', 200)
    cy.wait('@getCoffees').its('response.body').should('have.length', 14)
  })
})
