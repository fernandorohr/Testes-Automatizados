class CadastroNovoEnderecoElements {

    //Add 'pastilha vick' to basket
    //loginTextActived = () => { return 'span[class="navbar__menu-login--text nav-menu__item--actived"]'}

    //Add address  
    deliveryButton = () => {return 'button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]'}  
    deliveryHome = () => {return 'button[data-entrega="RECEBER_EM_CASA"]'}
    addAddress = () => {return 'a[href="/panvel/adicionarEndereco.do?redirect=informarEntrega.do"]'}
    stName = () => {return '[name="enderecoIdentificador"]'}
    cep = () => {return '[id="input-cep"]'}
    houseNumber = () => {return '[id="input-enderecoNumero"]'}
    complement = () => {return '[name="enderecoComplemento"]'}
    reference = () => {return '[name="enderecoReferencia"]'}
}

export default CadastroNovoEnderecoElements;
