// Importa a biblioteca readline-sync
import readlineSync = require('readline-sync');

// Cria um array com 10 números int. fixos
let numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Pergunta para o usuário qual número ele deseja encontrar
let numeroProcurado = readlineSync.questionInt('Digite o número que você deseja encontrar: ');

// Procura a posição do número no array 
let posicao = numeros.indexOf(numeroProcurado);

// Verifica se o número foi encontrado
if (posicao !== -1) {
  // Se encontrado, mostra a posição
  console.log(`O número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
  // Se não encontrado, mostra mensagem
  console.log(`O número ${numeroProcurado} não foi encontrado!`);
}
