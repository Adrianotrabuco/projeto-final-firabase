import {
  validarCadastro,
  validarLogin,
  validarSenha,
} from "./auth-validations";

describe("Validacoes de autenticacao", () => {
  test("deve mostrar erro se e-mail ou senha estiverem vazios no login", () => {
    expect(validarLogin("", "")).toBe("Preencha e-mail e senha");
  });

  test("deve permitir login com e-mail e senha preenchidos", () => {
    expect(validarLogin("teste@email.com", "12345678")).toBeNull();
  });

  test("deve validar senha forte", () => {
    expect(validarSenha("Teste@123")).toBe(true);
  });

  test("deve rejeitar senha com menos de 8 caracteres", () => {
    expect(validarSenha("123456")).toBe(false);
  });

  test("deve rejeitar senha sem caractere especial", () => {
    expect(validarSenha("12345678")).toBe(false);
  });

  test("deve exigir todos os campos no cadastro", () => {
    expect(validarCadastro("", "", "", "")).toBe("Preencha todos os campos");
  });

  test("deve validar se as senhas sao iguais", () => {
    expect(
      validarCadastro("Adriano", "teste@email.com", "Teste@123", "Teste@456"),
    ).toBe("As senhas nao conferem");
  });

  test("deve mostrar aviso quando a senha nao segue a regra", () => {
    expect(
      validarCadastro("Adriano", "teste@email.com", "123456", "123456"),
    ).toBe("A senha precisa conter no minimo 8 caracteres, 1 caracter especial.");
  });

  test("deve aceitar cadastro valido", () => {
    expect(
      validarCadastro("Adriano", "teste@email.com", "Teste@123", "Teste@123"),
    ).toBeNull();
  });
});
