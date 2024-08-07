//Aplicando método map()
let numeros = [1,2,3,4,5,6,7,8,9,10];
let numDobrado = numeros.map(function(valor){
    return valor * 2;
})
console.log(numDobrado)

let funcionarios = [
    {nome: "Rafael", idade: "33"},
    {nome: "Lucas", idade: "30"},
    {nome: "Marcelino", idade: "46"},
    {nome: "Lara", idade: "21"}
];
let nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes)