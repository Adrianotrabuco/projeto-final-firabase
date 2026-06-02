export function validarLogin(email: string, senha: string) {
  if (!email || !senha) {
    return "Preencha e-mail e senha";
  }

  return null;
}

export function validarSenha(senha: string) {
  if (senha.length < 8) return false;
  if (!/[A-Z]/.test(senha)) return false;
  if (!/[a-z]/.test(senha)) return false;
  if (!/[0-9]/.test(senha)) return false;
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
    return "As senhas não conferem";
  }

  if (!validarSenha(senha)) {
    return "A senha deve ter no mínimo 8 caracteres, letra maiúscula, minúscula, número e caractere especial";
  }

  return null;
}
