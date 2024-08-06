let valores = [8,1,7,2,9];

for (let cont = 0; cont < valores.length; cont++ ){
    console.log(`Item atual: ${valores[cont]}`)
}

let animais = [];

animais[0] = "pato";
animais[1] = "cachorro";
animais[2] = "gato";

console.log(animais)

//Calculando média dos números de um array

var total = 0
for (let cont = 0; cont < valores.length; cont++ ){
    total += valores[cont];
}
let media = total/valores.length
console.log(media)

//Localizar maior valor dentre o valores no array
valores.sort().reverse();
console.log(valores[0]);

//Construir array com cidades e retornar qual delas tem o maior nome
var cidades = ["Belo Horizonte", "Barbacena", "Ubá", "Mariana"];
cidades.sort();
console.log(cidades[0])

var list1 = [1,2,3,4,5];
console.log(list1.join(" | "))

let removido = list1.shift();
console.log(removido);

console.log(list1);

list1.push(9);

console.log(list1);

console.log(list1.indexOf(9))

list1.pop();
console.log(list1)

//Empregando método splice
let list3 = [1,2,3,4,5,6,7];

list3.splice(1,2);

console.log(list1);

let nameList = ["Maria","João","Lucas","Pedro"];

let newNameList = nameList.splice(1,2,"Luiz", "Rafael");

console.log(newNameList)
console.log(nameList)

let countryList = ["Brasil","Argentina","Colômbia"];
countryList.unshift("Uruguai");
console.log(countryList);

//Exercicio: criar array com os nomes Guilherme, Manuel, Samuel, Davi, João
//Acrescentar nome Monica
//Retirar o último elemento do array
//Encontrar a posição do nome Samuel
//Trocar Manuel por Emanuel

let names = ["Guilherme", "Manuel", "Samuel", "Davi", "João"];
console.log(names);

names.unshift("Monica");
console.log(names);

names.pop();
console.log(names);

console.log(names.indexOf("Samuel"));

names.splice(2,1,"Emanuel");
console.log(names);