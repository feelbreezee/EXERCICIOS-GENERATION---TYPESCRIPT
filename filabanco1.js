"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a classe Queue do arquivo queue.ts 
const queue_1 = require("./queue");
// Importa a biblioteca readline-sync 
const leia = require("readline-sync");
//faz fila do tipo string para armazenar os nomes dos clientes
const fila = new queue_1.Queue();
//controla o loop do menu
let continuar = true;
//armazena a opção escolhida pelo usuário
let opcao;
do {
    //mostra o menu para o usuário
    console.log("*");
    console.log("");
    console.log("      1 - Adicionar Cliente na Fila");
    console.log("      2 - Listar todos os Clientes");
    console.log("      3 - Retirar Cliente da Fila");
    console.log("      0 - Sair");
    console.log("");
    console.log("*");
    console.log("");
    console.log("Entre com a opção desejada: ");
    //lê opção escolhida pelo usuário
    opcao = leia.questionInt("");
    switch (opcao) {
        case 1:
            //caso o usuário escolha adicionar um cliente na fila
            let nome = leia.question("Digite o nome do Cliente: ");
            fila.enqueue(nome); //adiciona o nome na fila
            console.log("-----------------------");
            console.log("Pessoa adicionada na fila:");
            fila.printQueue(); //mostra a fila atualizada
            break;
        case 2:
            //caso o usuário queira listar todos os clientes na fila
            console.log("Listando todos os clientes da fila:");
            fila.printQueue(); //exibe a fila
            break;
        case 3:
            //caso o usuário queira retirar o próximo cliente da fila
            console.log("Chamando o próximo da fila:");
            const pessoa = fila.dequeue(); //remove o primeiro da fila
            if (pessoa) {
                console.log(`Cliente ${pessoa} foi chamado e removido da fila.`);
            }
            else {
                console.log("A fila está vazia!");
            }
            break;
        case 0:
            //caso o usuário queira sair do programa
            console.log("Saindo...");
            continuar = false;
            break;
        default:
            //caso o usuário digite uma opção inválida
            console.log("Opção Inválida!");
            break;
    }
} while (continuar);
//# sourceMappingURL=filabanco1.js.map