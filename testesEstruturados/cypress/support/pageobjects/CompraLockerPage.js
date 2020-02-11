/// <reference types="Cypress" />

import CompraLockerElements from '../elements/CompraLockerElements'
import GlobalElements from '../elements/GlobalElements'
const compraLockerElements = new CompraLockerElements
const globalElements = new GlobalElements

class CompraLocker {
  compraLocker() {
    cy.get(compraLockerElements.informarEntrega()).click()
    cy.get(compraLockerElements.botaoFlutuante()).click()
    cy.get(compraLockerElements.botaoEntregaLocker()).click()    
    cy.get(compraLockerElements.botaoIdentificadorLocker()).click()
    cy.get(compraLockerElements.confirmarEntregaLocker()).click()    
    cy.get(compraLockerElements.checkoutPagamento()).click()
    cy.wait(1000)
    cy.get(compraLockerElements.cartaoCredito()).click()
    cy.wait(1000)
    cy.get(compraLockerElements.cardNumber()).type('4916823881703714')    
    cy.get(compraLockerElements.cardMonthExpiry()).select('05')    
    cy.get(compraLockerElements.cardExpiry()).select('2020')
    cy.get(compraLockerElements.cardCvc()).type('297')
    cy.contains('CONFIRMAR PAGAMENTO').click()
    cy.get(compraLockerElements.finalizarCompra()).click()
  }
}

export default CompraLocker;
