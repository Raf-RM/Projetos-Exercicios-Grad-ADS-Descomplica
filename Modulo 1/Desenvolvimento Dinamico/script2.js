const readLSync = require('readline-sync');
let name = readLSync.question("Digite seu primeiro nome: ");
let lastName = readLSync.question("Digite seu sobrenome: ");

console.log(`Seja bem vindo, ${name} ${lastName}`)