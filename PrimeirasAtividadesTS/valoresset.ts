import readlinesync = require ("readline-sync"); //importa biblioteca readline-sync

// set armazena números sem repetir
const numeros: Set <number> = new Set();

// Função para verificar se o valor é um número válido
function ehNumeroValido (valor: string): boolean {
  const numero = Number(valor);
  return !isNaN(numero) && Number.isInteger(numero);
}

// Repetir até que o Set tenha 10 números diferentes
while (numeros.size < 10) {
  const entrada = readlinesync.question('Digite um número (não repetido): ');

  if (!ehNumeroValido(entrada)) {
    console.log('Por favor, digite um número válido.');
    continue; // pula para a próxima repetição
  }

  const numero = Number(entrada);

  if (numeros.has(numero)) {
    console.log('Esse número já foi digitado. Tente outro.');
    continue;
  }

  numeros.add(numero);
}

// Mostrar os números digitados
console.log('\nNúmeros digitados:');
for (const numero of numeros) {
  console.log(numero);
}
