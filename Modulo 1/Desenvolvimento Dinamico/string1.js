//Verificando tamanho string
let nome = "Rafael Rodrigues";
let tamanho = nome.length;
console.log(tamanho);

//Colocando string em caixa alta
let nomeCaixaAlta = nome.toLocaleUpperCase();
console.log(nomeCaixaAlta);

//Posição de um caracter
let time = "BarBarcelona";
let posição = time.indexOf("e");
console.log(posição)

//Cortando string utilizando Slice
let frase = "O ar está seco hoje.";
let fraseCortada = frase.slice(0, 14);
console.log(fraseCortada)
fraseCortada = frase.slice(5,);
console.log(fraseCortada);

//Verificando presenza de uma palavra em uma frase
let palavra = frase.includes("seco");
console.log(palavra);
palavra = frase.includes("tempo");
console.log(palavra);

//Utilizando concat para concatenar strings
let str1 = "Hello";
let str2 = " world";
let str3 = str1.concat(str2);
console.log(str3);

//Utilizando método trim para remover espaços no inicio e no fim da string
let fraseEspacada = "          Frase sem espaços.      ";
console.log(fraseEspacada.trim());

//Utilizando método split para separar string
let num = "1,2,3,4,5";
let arrayNum = num.split(",");
console.log(arrayNum)