// Aplicando Filter
let numeros = [1,2,3,4,5,6,7,8,9,10];

let numerosPares = numeros.filter(item => item % 2 === 0);
console.log(numerosPares);

let numerosMaioresCinco = numeros.filter(
    function(valor){
        if (valor > 5){
            return valor;
        }
    }
);
console.log(numerosMaioresCinco);

let numerosMenoresSete = numeros.filter(
    function(valor){
        return valor < 7;
    }
);
console.log(numerosMenoresSete);

function buscarValores(valor){
    return valor % 2 != 0;
};
let nummerosImpares = numeros.filter(buscarValores);
console.log(nummerosImpares);

let numerosDivisiveisPorTres = numeros.filter((valor) => {
    return valor % 3 == 0;
});
console.log(numerosDivisiveisPorTres)

let numerosDivisiveisPorCinco = numeros.filter(valor => valor % 5 == 0);
console.log(numerosDivisiveisPorCinco);

let funcionario = [
    {nome: "Rafael", idade: "33"},
    {nome: "Lucas", idade: "30"},
    {nome: "Marcelino", idade: "46"},
    {nome: "Lara", idade: "21"}
];
let pessoasListagem = funcionario.filter(
    function(valor){
        return valor.nome.length >= 5;
    }
)
console.log(pessoasListagem)

//Exercício
//Criar obj  produtos com {id:, descrição:, categoria:}
//Criar um array utilizando filter contendo somente eletrônicos

let produtos = [
    {id:1, descricao:"Notebook", categoria:"eletrônico"},
    {id:2, descricao:"Mesa", categoria:"móvel"},
    {id:3, descricao:"Geladeira", categoria:"Eletrodoméstico"},
    {id:4, descricao:"Fogão", categoria:"Eletrodoméstico"},
    {id:5, descricao:"Armário", categoria:"Móvel"},
    {id:6, descricao:"Televisão", categoria:"eletrônico"},
    {id:7, descricao:"celular", categoria:"eletrônico"},
];
let produtosFiltrados = produtos.filter(
    function(valor){
        if(valor.categoria.toLowerCase() == "eletrônico"){
            return valor.descricao;
        }
    }
);
console.log(produtosFiltrados);

