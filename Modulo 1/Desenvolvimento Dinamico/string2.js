//Verificando em qual posição inicia uma palavra
let str = "Javascript e Python";
let posicao = str.indexOf("Python");
console.log(posicao);

//Montando nova string a partir de uma posição utilizando método substring
let novaStr = str.substring(13,19);
console.log(novaStr);

//Prática empregando startswith + substring + replace + UpperCase
let frase = "Olá mundo!";
if(frase.startsWith("Olá")){
    let subStr = frase.substring(4);
    let novaStr = subStr.replace("mundo","pessoal");
    let novaStrMaiuscula = novaStr.toUpperCase();
    console.log(novaStrMaiuscula)
}