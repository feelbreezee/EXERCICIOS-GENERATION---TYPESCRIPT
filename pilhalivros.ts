//importa a classe stack do arquivo stack.ts p/ usar a estrutura de pilha
import { Stack } from "./stack";

//importa o readline-sync p/ ler os dados
import * as leia from "readline-sync";

//cria uma nova pilha que vai armazenar as strings (nomes de livros)
const pilha = new Stack<string>();

//controla se o programa deve continuar rodando (menu repetitivo)
let continuar = true;

//variável p/ guardar opção escolhida pelo user
let opcao: number;

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
            const livro = leia.question("Digite o nome do livro: ");

            //adiciona o livro na pilha (no topo)
            pilha.push(livro);

            //mostra mensagem confirmando a adição
            console.log(`"${livro}" foi adicionado à pilha.`);
            break;

        case 2:
            //se o user escolheu listar todos os livros...

            //verifica se a pilha está vazia
            if (pilha.isEmpty()) {
                //se sim, avisa que está vazia
                console.log("A pilha está vazia.");
            } else {
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
            } else {
                //remove o livro do topo da pilha e guarda numa variável
                const retirado = pilha.pop();

                //mostra mensagem dizendo qual livro foi retirado
                console.log(`"${retirado}" foi retirado da pilha.`);
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

