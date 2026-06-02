import {
    validarCadastro,
    validarLogin,
    validarSenha,
} from "./auth-validations";

describe("Validações de autenticação", () => {
  test("deve mostrar erro se e-mail ou senha estiverem vazios no login", () => {
    expect(validarLogin("", "")).toBe("Preencha e-mail e senha");
  });

  test("deve permitir login com e-mail e senha preenchidos", () => {
    expect(validarLogin("teste@email.com", "12345678")).toBeNull();
  });

  test("deve validar senha forte", () => {
    expect(validarSenha("Teste@123")).toBe(true);
  });

  test("deve rejeitar senha fraca", () => {
    expect(validarSenha("123456")).toBe(false);
  });

  test("deve exigir todos os campos no cadastro", () => {
    expect(validarCadastro("", "", "", "")).toBe("Preencha todos os campos");
  });

  test("deve validar se as senhas são iguais", () => {
    expect(
      validarCadastro("Adriano", "teste@email.com", "Teste@123", "Teste@456"),
    ).toBe("As senhas não conferem");
  });

  test("deve aceitar cadastro válido", () => {
    expect(
      validarCadastro("Adriano", "teste@email.com", "Teste@123", "Teste@123"),
    ).toBeNull();
  });
});
