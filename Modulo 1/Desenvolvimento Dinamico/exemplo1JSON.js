const pessoa = {
    nome: "Rafael",
    idade: 33,
    profissao: "Desenvolvedor"
};

const pessoaJson = JSON.stringify(pessoa);

const pessoaObjt = JSON.parse(pessoaJson);

console.log(pessoa)
console.log(pessoaJson)
console.log(pessoaObjt)