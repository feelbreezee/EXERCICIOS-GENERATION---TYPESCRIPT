import readlinesync = require ("readline-sync"); //importa biblioteca readline-sync
   
let numerosSet: Set<number>= new Set([2,5,1,3,4,9,7,8,10,6]); // Set com 10 números inteiros

// Pede p/ user digitar um número int.
let numeroProcurado = readlinesync.questionInt('Digite o número que você deseja encontrar: '); 

// Verifica se o número está no Set
if (numerosSet.has(numeroProcurado)) {
  console.log(`O número ${numeroProcurado} foi encontrado.`); 
}
else {
  console.log(`O número ${numeroProcurado} não foi encontrado.`); 
}   
