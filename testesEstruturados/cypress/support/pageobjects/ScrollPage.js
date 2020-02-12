/// <reference types="Cypress" />

import ScrollElements from '../elements/ScrollElements'
const scrollElements = new ScrollElements

class ScrollPage {
  localizarCarrossel() {
    cy.get(scrollElements.showcase()).should('be.visible')
  }

  realizarScroll() {
    cy.scrollTo(0,12800)
  }
}

export default ScrollPage;
