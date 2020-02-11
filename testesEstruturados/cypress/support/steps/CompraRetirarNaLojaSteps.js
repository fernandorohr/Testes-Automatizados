/* global Given, Then, When */

import CompraRetirarNaLojaPage from '../pageobjects/CompraRetirarNaLojaPage'
import GlobalPage from '../pageobjects/GlobalPage'
const compraRetirarNaLojaPage = new CompraRetirarNaLojaPage
const globalPage = new GlobalPage

Given ("acesso o site panvel", () => {
    globalPage.acessarSite();
})

When ("acessa minha conta", () => {
    globalPage.loginUsuario();
})

And ("adiciona um produto ao carrinho", () => {
    globalPage.adicionarItem();
})

Then ("finaliza a compra", () => {
    compraRetirarNaLojaPage.retirarNaLoja();
})