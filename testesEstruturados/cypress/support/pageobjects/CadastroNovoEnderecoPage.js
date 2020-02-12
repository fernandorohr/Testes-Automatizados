/// <reference types="Cypress" />

import CadastroNovoEnderecoElements from '../elements/CadastroNovoEnderecoElements'
import GlobalElements from '../elements/GlobalElements'
const cadastroEnderecoElements = new CadastroNovoEnderecoElements
const globalElements = new GlobalElements

class CadastroNovoEnderecoPage {
    // Add new address
    novoEndereco(){
        cy.get(globalElements.basket()).click()
        cy.get(globalElements.deliverySelect()).click()
        cy.get(cadastroEnderecoElements.deliveryHome()).click()
        cy.get(cadastroEnderecoElements.addAddress()).click()
        cy.get(globalElements.stName()).type('Casa')
        cy.get(globalElements.cep()).type('95612150')
        cy.get(globalElements.houseNumber()).type('4500')
        cy.get(cadastroEnderecoElements.complement()).type('Casa')
        cy.get(cadastroEnderecoElements.reference()).type('ERS 115')
        cy.contains("Adicionar Endereço").click()
    }
}

export default CadastroNovoEnderecoPage;
