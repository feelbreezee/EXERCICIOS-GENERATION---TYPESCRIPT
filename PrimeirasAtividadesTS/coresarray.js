"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlinesync = require("readline-sync");
let cores = [];
for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question(`Digite a ${i + 1} cor: `);
    cores.push(cor);
}
console.log('\nListar todas as cores:');
for (const cor of cores) {
    console.log(cor);
}
const coresOrdenadas = [...cores].sort();
console.log('\nOrdenar as cores:');
for (const cor of coresOrdenadas) {
    console.log(cor);
}
//# sourceMappingURL=coresarray.js.map