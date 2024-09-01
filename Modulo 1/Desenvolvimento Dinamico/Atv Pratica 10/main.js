class Funcionario {
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    get seApresentar(){
        console.log(`Olá! Me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`)
    }
    
    get trabalhar(){
        console.log("Trabalhando")
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    get gerenciar(){
        console.log("Gerenciando.")
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    get programar(){
        console.log("Programando.")
    }
}

var func1 = new Desenvolvedor("Rafael", 33, "Desenvolvedor", "Javascript");
var func2 = new Gerente("Mateus", 35, "Gerente", "Lojística");

func1.seApresentar
func1.trabalhar
func1.programar

func2.seApresentar
func2.trabalhar
func2.gerenciar

