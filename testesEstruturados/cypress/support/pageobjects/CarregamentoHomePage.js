/// <reference types="Cypress" />

import CarregamentoHomeElements from '../elements/CarregamentoHomeElements'
const carregamentoElements = new CarregamentoHomeElements

class CarregamentoHomePage {
    visualizarElementos(){
        cy.get(carregamentoElements.showcase()).should('be.visible')
        cy.get(carregamentoElements.banner()).should('be.visible')
        cy.get(carregamentoElements.navBar()).within(() => {
            cy.get(carregamentoElements.subNavBar1()).should('be.visible')
            cy.get(carregamentoElements.subNavBar2()).should('be.visible')
            cy.get(carregamentoElements.subNavBar3()).should('be.visible')
            cy.get(carregamentoElements.subNavBar4()).should('be.visible')
            cy.get(carregamentoElements.subNavBar5()).should('be.visible')
            cy.get(carregamentoElements.subNavBar6()).should('be.visible')
        })
        cy.get(carregamentoElements.showcaseOnSale()).should('be.visible')
        cy.get(carregamentoElements.showcaseNewItem()).should('be.visible')
        cy.get(carregamentoElements.footer()).should('be.visible')
        cy.get(carregamentoElements.newsletter()).should('be.visible')
    }
}

export default CarregamentoHomePage;
