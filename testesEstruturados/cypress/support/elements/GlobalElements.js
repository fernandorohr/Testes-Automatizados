class GlobalElements { 
  // Elements from loginUsuario
  loginUser = () => { return 'span[class="navbar__menu-login--text"]' }
  user = () => {return 'input[id="input-usuario"]'}
  password = () => {return 'input[name="senha"]'}
  loginBtn = () => {return 'button[id="btn-next-step"]'}

  // Elements from adicionarProduto
  search = () => {return '[name = search]'}
  pastilhaVick = () => {return 'a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]'}
  
  // Elements from finalizarCompra
  payment = () => { return 'button[data-click="checkout-pagamento"]' }
  creditCard = () => { return 'button[data-pagamento="CARTAO_CREDITO"]' }
  cardNumber = () => { return 'input[id="input-card-number"]' }
  cardMonthExpiry = () => { return 'select[name="input-card-month-expiry"]' }
  cardYearExpiry = () => { return 'select[name="input-card-expiry"]' }
  cardCvc = () => { return 'input[name="input-card-cvc"]' }
  checkout = () => { return 'button[id="btn-finalizar-compra"]' }
  
  // Elements from novoEndereco, criarConta, compraLocker, compraRetirarNaLoja
  basket = () => {return 'a[href="/panvel/informarEntrega.do"]'}
  deliverySelect = () => {return 'button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]'}
  stName = () => {return '[name="enderecoIdentificador"]'}
  cep = () => {return '[id="input-cep"]'}
  houseNumber = () => {return '[id="input-enderecoNumero"]'}
}

export default GlobalElements;
