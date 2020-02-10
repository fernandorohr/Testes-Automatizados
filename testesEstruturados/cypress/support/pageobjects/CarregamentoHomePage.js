/// <reference types="Cypress" />

import CarregamentoHomeElements from '../elements/CarregamentoHomeElements'
import GlobalElements from '../elements/GlobalElements'
const carregamentoElements = new CarregamentoHomeElements
const globalElements = new GlobalElements

class CarregamentoHomePage {
    visualizarElementos(){
        //Showcase
        cy.get(carregamentoElements.showcase()).should('be.visible')
        //Banner
        cy.get(carregamentoElements.banner()).should('be.visible')
        //NavBar
        cy.get(carregamentoElements.navBar()).within(() => {
            cy.get(carregamentoElements.subNavBar1()).should('be.visible')
            cy.get(carregamentoElements.subNavBar2()).should('be.visible')
            cy.get(carregamentoElements.subNavBar3()).should('be.visible')
            cy.get(carregamentoElements.subNavBar4()).should('be.visible')
            cy.get(carregamentoElements.subNavBar5()).should('be.visible')
            cy.get(carregamentoElements.subNavBar6()).should('be.visible')
        })
        //Showcase - On Sale
        cy.get(carregamentoElements.showcaseOnSale()).should('be.visible')
        //Showcase - New Items
        cy.get(carregamentoElements.showcaseNewItem()).should('be.visible')
        //Footer
        cy.get(carregamentoElements.footer()).should('be.visible')
        //Newsletter
        cy.get(carregamentoElements.newsletter()).should('be.visible')
    }

    adicionarItem(){
        //Search and add to basket
        cy.get(globalElements.search()).click().type('fralda{enter}')
        cy.contains(carregamentoElements.basket()).click()
        cy.visit('https://www.panvel.com/panvel/login.do')
    }
}

export default CarregamentoHomePage;
