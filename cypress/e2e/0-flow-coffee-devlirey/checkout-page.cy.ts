/// <reference types="cypress" />

describe('Checkout page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Redirect from home page to checkout page', () => {
    it('Testing if clicking on the shopping cart button redirects to the checkout page correctly', () => {
      cy.get('[data-testid="add-coffee"]').eq(0).click()
      cy.get('[data-testid="add-to-cart"]').eq(0).click()

      cy.get('[data-testid="cart-button"]').click()

      cy.location().should((location) => {
        expect(location.pathname).to.eq('/checkout')
      })
    })
  })

  context('Buyer info component', () => {
    it('Testing if all elements are presents on the screen', () => {
      cy.get('[data-testid="add-coffee"]').eq(0).click()
      cy.get('[data-testid="add-to-cart"]').eq(0).click()

      cy.get('[data-testid="cart-button"]').click()

      cy.get('[data-testid=buyer-info]').should('be.visible')
      cy.get('[data-testid=method-payment] > button').should('have.length', 3)
    })
  })

  context('Selected coffee component', () => {
    it('Testing if all elements are presents on the screen', () => {
      cy.get('[data-testid="add-coffee"]').eq(0).click()
      cy.get('[data-testid="add-to-cart"]').eq(0).click()

      cy.get('[data-testid="cart-button"]').click()

      cy.get('[data-testid=selected-coffee]').should('be.visible')
      cy.get('[data-testid=selected-coffee]').contains('Expresso Tradicional')
      cy.get('[data-testid=selected-coffee]').contains('R$ 13,40')
    })
  })

  context('Redirect from home page to empty cart page', () => {
    it('Testing if it redirects to the empty cart page', () => {
      cy.get('[data-testid="cart-button"]').click()

      cy.get('h1').contains('Seu carrinho está vazio!')

      cy.get('button').click()

      cy.location().should((location) => {
        expect(location.pathname).to.eq('/')
      })
    })
  })
})
