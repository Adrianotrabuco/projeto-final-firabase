export function normalizarPreco(preco: string | number) {
  if (typeof preco === "number") return preco;

  const precoNormalizado = preco.trim().replace(",", ".");

  return Number(precoNormalizado);
}

export function validarTenis(modelo: string, preco: string | number) {
  if (!modelo.trim()) {
    return "Preencha o modelo";
  }

  if (normalizarPreco(preco) <= 0) {
    return "O preco deve ser maior que zero";
  }

  return null;
}
