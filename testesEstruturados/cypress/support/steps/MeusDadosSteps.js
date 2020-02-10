/* global Given, Then, When, And */

import MeusDadosPage from '../pageobjects/MeusDadosPage'
import GlobalPage from '../pageobjects/GlobalPage'
const meusDadosPage = new MeusDadosPage
const globalPage = new GlobalPage

Given("acesso o site Panvel", () => {
  globalPage.acessarSite();
})

When("acesso minha conta", () => {
  globalPage.loginUsuario();
})

Then("devo verificar os dados na minha conta", () => {
  meusDadosPage.verificarDadosMinhaConta();
})
