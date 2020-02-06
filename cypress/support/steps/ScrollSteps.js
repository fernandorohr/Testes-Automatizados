/* global Given, Then, When */

import ScrollPage from '../pageobjects/ScrollPage'
const scrollPage = new ScrollPage

Given("acesso o site Panvel", () => {
  scrollPage.acessarSite();
})

When("localizo o carrossel", () => {
  scrollPage.localizarCarrossel();
})

Then("devo realizar o scroll na página", () => {
  scrollPage.realizarScroll();
})
