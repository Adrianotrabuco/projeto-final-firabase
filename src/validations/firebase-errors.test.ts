import { tratarErroCadastro, tratarErroLogin } from "./firebase-errors";

describe("Tratamento de erros do Firebase", () => {
  test("deve tratar usuário não encontrado", () => {
    expect(tratarErroLogin("auth/user-not-found")).toBe(
      "Usuário não encontrado",
    );
  });

  test("deve tratar credencial inválida", () => {
    expect(tratarErroLogin("auth/invalid-credential")).toBe(
      "E-mail ou senha inválidos",
    );
  });

  test("deve tratar e-mail inválido", () => {
    expect(tratarErroLogin("auth/invalid-email")).toBe("E-mail inválido");
  });

  test("deve tratar erro genérico no login", () => {
    expect(tratarErroLogin("erro-qualquer")).toBe("Erro ao fazer login");
  });

  test("deve tratar e-mail já cadastrado", () => {
    expect(tratarErroCadastro("auth/email-already-in-use")).toBe(
      "Este e-mail já está em uso",
    );
  });

  test("deve tratar senha fraca", () => {
    expect(tratarErroCadastro("auth/weak-password")).toBe("Senha muito fraca");
  });

  test("deve tratar erro genérico no cadastro", () => {
    expect(tratarErroCadastro("erro-qualquer")).toBe(
      "Erro ao cadastrar usuário",
    );
  });
});
