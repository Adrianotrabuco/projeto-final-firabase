import { normalizarPreco, validarTenis } from "./tenis-validations";

describe("Validacoes de tenis", () => {
  test("deve rejeitar preco zero e negativo", () => {
    expect(validarTenis("Air Max", 0)).toBe("O preco deve ser maior que zero");
    expect(validarTenis("Air Max", -10)).toBe("O preco deve ser maior que zero");
  });

  test("deve rejeitar modelo vazio", () => {
    expect(validarTenis("", 199.99)).toBe("Preencha o modelo");
  });

  test("deve normalizar preco com ponto decimal", () => {
    expect(normalizarPreco("199.99")).toBe(199.99);
  });
});
