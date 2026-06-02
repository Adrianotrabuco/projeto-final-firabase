export function tratarErroLogin(codigo: string) {
  if (codigo === "auth/user-not-found") {
    return "Usuário não encontrado";
  }

  if (codigo === "auth/invalid-credential") {
    return "E-mail ou senha inválidos";
  }

  if (codigo === "auth/invalid-email") {
    return "E-mail inválido";
  }

  return "Erro ao fazer login";
}

export function tratarErroCadastro(codigo: string) {
  if (codigo === "auth/email-already-in-use") {
    return "Este e-mail já está em uso";
  }

  if (codigo === "auth/weak-password") {
    return "Senha muito fraca";
  }

  return "Erro ao cadastrar usuário";
}
