"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importa a classe stack do arquivo stack.ts p/ usar a estrutura de pilha
var stack_1 = require("./stack");
//importa o readline-sync p/ ler os dados
var leia = require("readline-sync");
//cria uma nova pilha que vai armazenar as strings (nomes de livros)
var pilha = new stack_1.Stack();
//controla se o programa deve continuar rodando (menu repetitivo)
var continuar = true;
//variável p/ guardar opção escolhida pelo user
var opcao;
//laço que repete enquanto continuar for true
do {
    //mostra o menu com as opções para o user
    console.log("\n==============================");
    console.log("        PILHA DE LIVROS");
    console.log("==============================");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("==============================");
    //pede ao user p/ digitar a opção e converte p/ número
    opcao = leia.questionInt("Digite a opção desejada: ");
    //avalia a opção escolhida
    switch (opcao) {
        case 1:
            //se o usuário escolheu adicionar um livro...
            //pede para digitar o nome do livro
            var livro = leia.question("Digite o nome do livro: ");
            //adiciona o livro na pilha (no topo)
            pilha.push(livro);
            //mostra mensagem confirmando a adição
            console.log("\"".concat(livro, "\" foi adicionado \u00E0 pilha."));
            break;
        case 2:
            //se o user escolheu listar todos os livros...
            //verifica se a pilha está vazia
            if (pilha.isEmpty()) {
                //se sim, avisa que está vazia
                console.log("A pilha está vazia.");
            }
            else {
                //caso contrário, imprime os livros na pilha
                pilha.printStack();
            }
            break;
        case 3:
            //se o user escolheu retirar um livro da pilha...
            //verifica se a pilha está vazia
            if (pilha.isEmpty()) {
                //s sim, informa que não tem livro para retirar
                console.log("Não é possível retirar. A pilha está vazia.");
            }
            else {
                //remove o livro do topo da pilha e guarda numa variável
                var retirado = pilha.pop();
                //mostra mensagem dizendo qual livro foi retirado
                console.log("\"".concat(retirado, "\" foi retirado da pilha."));
            }
            break;
        case 0:
            //se o user escolheu sair, muda o controle para false
            continuar = false;
            //mensagem de encerramento
            console.log("Encerrando o programa...");
            break;
        default:
            //caso digite uma opção inválida, avisa para tentar novamente
            console.log("Opção inválida. Tente novamente.");
    }
    //enquanto continuar for true, o menu fica aparecendo
} while (continuar);
