/* global Given, Then, When */

import cadastroNovoEndereco from '../pageobjects/cadastroNovoEndereco'
import GlobalPage from '../pageobjects/GlobalPage'
const CadastroNovoEndereco = new cadastroNovoEndereco
const globalPage = new GlobalPage

Given ("acessa o site", () => {
    globalPage.acessarSite();
})

When ("acessa a conta do usuario", () => {
    globalPage.acessarUsuario();
})

And ("adiciona um produto ao carrinho", () => {
    CadastroNovoEndereco.adicionarItem();
})

Then ("cadastra novo endereco", () => {
    CadastroNovoEndereco.novoEndereco();
})