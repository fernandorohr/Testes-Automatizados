/* global Given, Then, When, And */

import MeusDadosPage from '../pageobjects/MeusDadosPage'
const meusDadosPage = new MeusDadosPage

Given("acesso o site Panvel", () => {
  meusDadosPage.acessarSite();
})

When("acesso minha conta", () => {
  meusDadosPage.acessarMinhaConta();
})

Then("devo verificar os dados na minha conta", () => {
  meusDadosPage.verificarDadosMinhaConta();
})
