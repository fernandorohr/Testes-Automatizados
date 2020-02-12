/// <reference types="Cypress" />

import CompraLockerElements from '../elements/CompraLockerElements'
import GlobalElements from '../elements/GlobalElements'
const compraLockerElements = new CompraLockerElements
const globalElements = new GlobalElements

class CompraLocker {
  compraLocker() {
    cy.get(globalElements.basket()).click()
    cy.get(globalElements.deliverySelect()).click()
    cy.get(compraLockerElements.deliveryLockerBtn()).click()    
    cy.get(compraLockerElements.identifierLockerBtn()).click()
    cy.get(compraLockerElements.deliveryConfirmLocker()).click()    
  }
}

export default CompraLocker;
