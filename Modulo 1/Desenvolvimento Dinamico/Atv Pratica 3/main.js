const readLine = require('readline-sync');

var continuar = true;

// Criterios de Elegibilidade
var idadeMin = readLine.question("Qual a idade mínima para se candidatar?\n");
var experienciaMin = readLine.question("Qual o tempo de experiencia mínimo para se candidatar?\n");
var nivelEducacaoMin = readLine.question("Qual o nível de educação mínimo para se candidatar?\n");
var certivicacaoObrigatoria = readLine.question("É obrigatório ter certificação? S/n \n");


console.log(`
    Critérios de Elegibilidade para essa vaga:\n
    Idade mínima: ${idadeMin}\n
    tempo de experiencia mínimo: ${experienciaMin}\n
    nível de educação mínimo: ${nivelEducacaoMin}\n
    Obrigatório ter certificação? : ${certivicacaoObrigatoria}\n]
    `);

//Inserindo candidatos
while (continuar){
    console.log("Insira os dados do candidato.")
    let nome  = readLine.question("Qual o nome do candidato?\n");
    let idade = readLine.question("Qual a idade do candidato?\n");
    let experiencia = readLine.question("Qual o nível de experiência do candidato (em meses)?\n");
    let nivelEducacao = readLine.question("Qual o grau de escolaridade do candidato?\n");
    var temCertificacao = "n";

    if (certivicacaoObrigatoria.toUpperCase() == "S"){
        temCertificacao = readLine.question("O candidato possui certificação? S/n\n");
    }

    if (idade >= idadeMin && 
        experiencia >= experienciaMin &&
        nivelEducacao.toUpperCase() == nivelEducacaoMin.toUpperCase() &&
        temCertificacao.toUpperCase() == certivicacaoObrigatoria.toUpperCase()){
            console.log(`O candidato ${nome} está elegível para a vaga.`)
        }else{
            console.log(`O candidato ${nome} está inelegível para a vaga. Pois não atende a todos os pré-requisitos.`)
        };

    continuar = readLine.question("Deseja inserir outro candidato?S/n\n");
    if (continuar.toUpperCase() == "S"){
        continuar = true;
    }else{
        return("Fim do processo.")
    }
}

