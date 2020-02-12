/* global Given, Then, When */

import ScrollPage from '../pageobjects/ScrollPage'
import GlobalPage from '../pageobjects/GlobalPage'
const scrollPage = new ScrollPage
const globalPage = new GlobalPage

Given("acesso o site Panvel", () => {
  globalPage.acessarSite();
})

When("localizo o carrossel", () => {
  scrollPage.localizarCarrossel();
})

Then("devo realizar o scroll na página", () => {
  scrollPage.realizarScroll();
})
