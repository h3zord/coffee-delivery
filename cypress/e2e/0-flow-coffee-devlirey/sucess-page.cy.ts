/// <reference types="cypress" />

describe('Sucess page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Redirect from checkout page to sucess page', async () => {
    it('Testing if the purchase is completed correctly e checking if all elements are presents on screen', () => {
      cy.get('[data-testid="add-coffee"]').eq(0).click()
      cy.get('[data-testid="add-to-cart"]').eq(0).click()

      cy.get('[data-testid="cart-button"]').click()

      cy.get('[data-testid="buyer-info-form"] input').should('have.length', 7)

      cy.get('[data-testid="buyer-info-form"] input').eq(0).type('01001-000')
      cy.get('[data-testid="buyer-info-form"] input').eq(1).type('Rua fake')
      cy.get('[data-testid="buyer-info-form"] input').eq(2).type('000')
      cy.get('[data-testid="buyer-info-form"] input').eq(3).type('Centro')
      cy.get('[data-testid="buyer-info-form"] input').eq(4).type('Bairro fake')

      cy.get('[form=buyer-info-form]').click()

      cy.location().should((location) => {
        expect(location.pathname).to.eq('/sucess')
      })

      cy.get('h1').contains('Uhu! Pedido confirmado!')
      cy.get('strong').contains('Rua fake, 000. Centro - São Paulo, SP')
      cy.get('img').should('be.visible')
    })
  })
})
