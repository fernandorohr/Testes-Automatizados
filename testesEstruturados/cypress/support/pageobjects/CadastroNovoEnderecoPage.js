/// <reference types="Cypress" />

import CadastroEnderecoElements from '../elements/CadastroNovoEnderecoElements'
import GlobalElements from '../elements/GlobalElements'
const cadastroEnderecoElements = new CadastroEnderecoElements
const globalElements = new GlobalElements

class CadastroNovoEnderecoPage {
     //Add 'pastilha vick' to basket
     adicionarItem(){
        cy.get(cadastroEnderecoElements.loginTextActived()).contains('ISAAC')
        cy.get(globalElements.search()).click().type('pastilha vick {enter}')
        cy.get(cadastroEnderecoElements.pastilhaVick()).click()
        cy.contains("COMPRAR").click()
        cy.wait(1200)
    }

    //Change Address
    novoEndereco(){
        cy.get(cadastroEnderecoElements.delivery()).click()
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
