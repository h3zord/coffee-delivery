/// <reference types="cypress" />

describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Header component', () => {
    it('Testing if all elements are present on the screen', () => {
      cy.get('header').should('be.visible')
      cy.get('a[href*="/"]').should('have.length', 2)
      cy.get('[data-testid="logo-image"]').should('be.visible')
      cy.get('[data-testid="location"]').should('be.visible')
      cy.get('.cart-button').should('be.visible')
    })
  })

  context('Introduction text component', () => {
    it('Testing if all elements are present on the screen', () => {
      cy.get('[data-testid="introduction-text"]').should('be.visible')
      cy.get('h1').should(
        'have.text',
        'Encontre o café perfeito para qualquer hora do dia',
      )
      cy.get('[alt="introduction-coffee-image"]').should('be.visible')
    })
  })

  context('Products card component', () => {
    it('Testing if all elements are present on the screen', () => {
      cy.get('h2').should('have.text', 'Nossos cafés')
      cy.get('[data-testid="coffee-card"]').should('have.length', 14)
    })

    it('Testing if add coffee to shopping cart', () => {
      cy.get('[data-testid="add-coffee"]').eq(0).dblclick()
      cy.get('[data-testid="sub-coffee"]').eq(0).click()
      cy.get('[data-testid="add-coffee"]').eq(1).dblclick()
      cy.get('[data-testid="sub-coffee"]').eq(1).click()

      cy.get('[data-testid="add-to-cart"]').eq(0).click()
      cy.get('[data-testid="add-to-cart"]').eq(1).click()

      cy.get('.counter-coffee').should('have.text', 2)
    })
  })
})
