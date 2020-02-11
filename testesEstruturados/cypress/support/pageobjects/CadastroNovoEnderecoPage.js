/// <reference types="Cypress" />

import CadastroNovoEnderecoElements from '../elements/CadastroNovoEnderecoElements'
import GlobalElements from '../elements/GlobalElements'
const cadastroNovoEnderecoElements = new CadastroNovoEnderecoElements
const globalElements = new GlobalElements

class CadastroNovoEnderecoPage {
     //Add 'pastilha vick' to basket
     adicionarItem(){
        cy.get(cadastroNovoEnderecoElements.loginTextActived()).contains('ISAAC')
        cy.get(globalElements.search()).click().type('pastilha vick {enter}')
        cy.get(cadastroNovoEnderecoElements.pastilhaVick()).click()
        cy.contains("COMPRAR").click()
        cy.wait(1200)
    }

    //Change Address
    novoEndereco(){
        cy.get(cadastroNovoEnderecoElements.delivery()).click()
        cy.get(cadastroNovoEnderecoElements.deliveryButton()).click()
        cy.get(cadastroNovoEnderecoElements.deliveryHome()).click()
        cy.get(cadastroNovoEnderecoElements.addAddress()).click()
        cy.get(cadastroNovoEnderecoElements.stName()).type('Rua do Isaac')
        cy.get(cadastroNovoEnderecoElements.cep()).type('95612150')
        cy.get(cadastroNovoEnderecoElements.houseNumber()).type('4500')
        cy.get(cadastroNovoEnderecoElements.complement()).type('Casa')
        cy.get(cadastroNovoEnderecoElements.reference()).type('ERS 115')
        cy.contains("Adicionar Endereço").click()
    }
}

export default CadastroNovoEnderecoPage;
