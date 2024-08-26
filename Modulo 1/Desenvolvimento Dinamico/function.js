//Funções Regulares

function multiplicar(a, b){
    return a*b
}

var x = multiplicar(3,5);
console.log(x)

var y = multiplicar(6,2);
console.log(y)

//Valores default
function somaValores(a, b = 2, c = 3){
    var total = a + b + c;
    return total
}
var res1 = somaValores(5) 
console.log(res1)

var res2 = somaValores(6,7,4)
console.log(res2)

//Função Anônima
var infoCal = function(a,b,c){
    return a + b + c
}

console.log(infoCal(1,3,6))

//Arrow Funciton
const soma = (valor1, valor2) => {
    return valor1 + valor2
}

console.log(soma(3,4))

const numeros = [1,2,3,4,5];
const valores = numeros.map((valor) => valor * valor)
console.log(valores)

var listaProdutos = ["geladeira", "fogão", "air fryer"];
var listaEmMaíuscula = listaProdutos.map(primeiraEmMaíscula);
function primeiraEmMaíscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}
console.log(listaEmMaíuscula)