/// <reference types="Cypress" />

import CompraRetirarNaLojaElements from '../elements/CompraRetirarNaLojaElements'
import GlobalElements from '../elements/GlobalElements'
const compraRetirarNaLojaElements = new CompraRetirarNaLojaElements
const globalElements = new GlobalElements

class CompraRetirarNaLojaPage {
    compraRetirarNaLoja() {
        cy.get(globalElements.basket()).click()
        cy.get(globalElements.deliverySelect()).click()
        cy.get(compraRetirarNaLojaElements.withdrawShop()).click()
        cy.get(compraRetirarNaLojaElements.city()).select('TAQUARA')
        cy.get(compraRetirarNaLojaElements.shopName()).click()
        cy.get(compraRetirarNaLojaElements.confirmWithdrawShop()).click()
    }
}

export default CompraRetirarNaLojaPage;
