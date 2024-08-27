//1 - Forma de criar objetos
const pessoa = {
    nome: "Rafael",
    sobrenome: "Rodrigues"
}

console.log(pessoa["sobrenome"])

//2 - forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Valéria";
funcionario.sobrenome = "Nunes";

console.log(funcionario.nome)

//3 - Forma de criar objetos
function criarPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const pessoa1 = criarPessoa("Maria","Aparecida")
const pessoa2 = criarPessoa("Jonas","Evangelsita")
console.log(pessoa1)
console.log(pessoa2)

//Criando function dentro do objeto
function criarPessoaMelhorado(nome, sobrenome, i){
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const pessoa3 = criarPessoaMelhorado("João","Mateus",37)
console.log(pessoa3.nomeCompleto)
console.log(pessoa3)
