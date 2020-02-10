class cadastroEnderecoElements {
    //User Login
    loginUser = () => {return 'span[class="navbar__menu-login--text"]'}
    user = () => {return 'input[id="input-usuario"]'}
    password = () => {return 'input[name="senha"]'}
    loginButton = () => {return 'button[id="btn-next-step"]'}

    //Add 'pastilha vick' to basket
    //search = () => {return '[name = search]'}
    pastilhaVick = () => {return 'a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]'}

    //Add address
    delivery = () => {return 'a[href="/panvel/informarEntrega.do"]'}
    deliveryButton = () => {return 'button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]'}
    deliveryHome = () => {return 'button[data-entrega="RECEBER_EM_CASA"]'}
    addAddress = () => {return 'a[href="/panvel/adicionarEndereco.do?redirect=informarEntrega.do"]'}
    stName = () => {return '[name="enderecoIdentificador"]'}
    cep = () => {return '[id="input-cep"]'}
    houseNumber = () => {return '[id="input-enderecoNumero"]'}
    complement = () => {return '[name="enderecoComplemento"]'}
    reference = () => {return '[name="enderecoReferencia"]'}
}

export default cadastroEnderecoElements