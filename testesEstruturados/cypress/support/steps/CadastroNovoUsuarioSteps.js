/* global Given, Then, When */

import CadastroNovoUsuarioPage from '../pageobjects/CadastroNovoUsuarioPage'
import GlobalPage from '../pageobjects/GlobalPage'
const cadastroNovoUsuarioPage = new CadastroNovoUsuarioPage
const globalPage = new GlobalPage

Given ("acesso o site Panvel", () => {
    globalPage.acessarSite();
})

When ("acesso a pagina criar conta", () => {
  cadastroNovoUsuarioPage.acessarPaginaLogin();
})

Then ("cadastro meus dados", () => {
  cadastroNovoUsuarioPage.criarConta();
})
