class MeusDadosElements { 
  loginUsuario = () => {return 'span[class="navbar__menu-login--text"]'}
  usuario = () => {return 'input[id="input-usuario"]'}
  senha = () => {return 'input[name="senha"]'}
  loginButton = () => {return 'button[id="btn-next-step"]'}
  sectionMeusDados = () => { return 'div[class="results"]' }
  atualizarMeusDados = () => { return 'a[class="btn btn--no-bg btn--icon btn--icon--right btn--text-right"]' }
}

export default MeusDadosElements;
