/// <reference types="Cypress" />

import CadastroNovoEnderecoElements from '../elements/CadastroNovoEnderecoElements'
import GlobalElements from '../elements/GlobalElements'
const cadastroEnderecoElements = new CadastroNovoEnderecoElements
const globalElements = new GlobalElements

class CadastroNovoEnderecoPage {

    //Change Address
    novoEndereco(){
        cy.get(globalElements.delivery()).click()
        cy.get(cadastroEnderecoElements.deliveryButton()).click()
        cy.get(cadastroEnderecoElements.deliveryHome()).click()
        cy.get(cadastroEnderecoElements.addAddress()).click()
        cy.get(cadastroEnderecoElements.stName()).type('Rua do Isaac')
        cy.get(cadastroEnderecoElements.cep()).type('95612150')
        cy.get(cadastroEnderecoElements.houseNumber()).type('4500')
        cy.get(cadastroEnderecoElements.complement()).type('Casa')
        cy.get(cadastroEnderecoElements.reference()).type('ERS 115')
        cy.contains("Adicionar Endereço").click()
    }
}

export default CadastroNovoEnderecoPage;
