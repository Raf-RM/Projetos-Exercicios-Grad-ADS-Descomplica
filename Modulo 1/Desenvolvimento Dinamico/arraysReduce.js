//Aplicando método reduce()
let numeros = [1,2,3,4,5,6,7,8,9,10];

let total = 0;
for(let i = 0; i < numeros.length; i++){
    total += numeros[i];
}
console.log(total)

let soma = numeros.reduce(function(total,numero){
    return total + numero
},0);
console.log(soma)
