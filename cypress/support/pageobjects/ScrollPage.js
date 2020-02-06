/// <reference types="Cypress" />

import ScrollElements from '../elements/ScrollElements'
const scrollElements = new ScrollElements
const url = Cypress.config("baseUrl")

class ScrollPage {
  acessarSite() {
    cy.visit(url)
  }

  localizarCarrossel() {
    cy.get(scrollElements.carrossel()).should('be.visible')
  }

  realizarScroll() {
    cy.scrollTo(0,12800)
  }
}

export default ScrollPage;