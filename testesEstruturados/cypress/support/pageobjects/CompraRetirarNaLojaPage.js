/// <reference types="Cypress" />

import CompraRetirarNaLojaElements from '../elements/CompraRetirarNaLojaElements'
import GlobalElements from '../elements/GlobalElements'
const compraRetirarNaLojaElements = new CompraRetirarNaLojaElements
const globalElements = new GlobalElements

class CompraRetirarNaLojaPage{
    retirarNaLoja(){
        cy.get(globalElements.delivery()).click()
        cy.get(compraRetirarNaLojaElements.withdrawButton()).click()
        cy.get(compraRetirarNaLojaElements.withdrawShop()).click()
        cy.get(compraRetirarNaLojaElements.city()).select('TAQUARA')
        cy.get(compraRetirarNaLojaElements.shopName()).click()
        cy.get(compraRetirarNaLojaElements.confirmWithdrawShop().click())
        cy.get(compraRetirarNaLojaElements.checkoutPay()).click()
        cy.get(compraRetirarNaLojaElements.creditCard()).click()
        cy.get(compraRetirarNaLojaElements.creditCardNumber()).type('4916823881703714')
        cy.get(compraRetirarNaLojaElements.creditCardExpiryMonth()).type('05')
        cy.get(compraRetirarNaLojaElements.creditCardExpiryYear()).type('2020')
        cy.get(compraRetirarNaLojaElements.creditCardCVC()).type('297')
        cy.contains('CONFIRMAR PAGAMENTO').click()
        cy.wait(1000)
        cy.get(compraRetirarNaLojaElements.confirm().click())

    }

}

export default CompraRetirarNaLojaPage;