/* global Given, Then, When */

import CadastroNovoUsuarioPage from '../pageobjects/CadastroNovoUsuarioPage'
import GlobalPage from '../pageobjects/GlobalPage'
const cadastroNovoUsuario = new CadastroNovoUsuarioPage
const globalPage = new GlobalPage

Given ("acesso o site Panvel", () => {
    globalPage.acessarSite();
})

When ("acesso a pagina criar conta", () => {
  cadastroNovoUsuario.acessarPaginaLogin();
})

Then ("cadastro meus dados", () => {
  cadastroNovoUsuario.criarConta();
})
