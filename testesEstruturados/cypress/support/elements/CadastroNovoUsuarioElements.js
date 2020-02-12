class CadastroNovoUsuarioElements { 
  name = () => { return 'input[name="nome"]' }
  cpf = () => { return 'input[name="cpf"]' }
  confirmPassword = () => { return 'input[name="confirmarSenha"]' }
  birth = () => { return 'input[id="input-data-nascimento"]' }
  ddd = () => { return 'input[id="input-ddd"]' }
  phoneNumber = () => { return 'input[id="input-phone"]' }
  email = () => { return 'input[id="input-email"]' }
}

export default CadastroNovoUsuarioElements;
