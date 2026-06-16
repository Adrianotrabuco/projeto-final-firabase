export function validarLogin(email: string, senha: string) {
  if (!email || !senha) {
    return "Preencha e-mail e senha";
  }

  return null;
}

export function validarSenha(senha: string) {
  if (senha.length < 8) return false;
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) return false;

  return true;
}

export function validarCadastro(
  nome: string,
  email: string,
  senha: string,
  confSenha: string,
) {
  if (!nome || !email || !senha || !confSenha) {
    return "Preencha todos os campos";
  }

  if (senha !== confSenha) {
    return "As senhas nao conferem";
  }

  if (!validarSenha(senha)) {
    return "A senha precisa conter no minimo 8 caracteres, 1 caracter especial.";
  }

  return null;
}
