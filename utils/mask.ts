function mask(value: string, pattern: string): string {
  let i = 0;
  const v = value.toString();

  return pattern.replace(/#/g, () => v[i++] || '');
}

// Exemplo de uso

const masked = mask('27996854563', '(##) #####-####');

console.log(masked) // (27) 99685-4563