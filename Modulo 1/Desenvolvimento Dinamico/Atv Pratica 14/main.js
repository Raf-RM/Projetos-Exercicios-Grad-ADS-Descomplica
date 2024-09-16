class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    get seApresentar() {
        alert(`Olá! Me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`)
    }

    get trabalhar() {
        console.log("Trabalhando")
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    get gerenciar() {
        console.log("Gerenciando.")
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    get programar() {
        console.log("Programando.")
    }
}

const listEmployees = document.getElementById("listEmployees");
var employee = [];

function newEmployeeRegister(employee) {
    var firstName = document.forms["newRegister"]["firstName"].value
    var lastName = document.forms["newRegister"]["lastName"].value;
    var age = document.forms["newRegister"]["age"].value;
    var position = document.forms["newRegister"]["position"].value;
    var department = document.forms["newRegister"]["department"].value;
    var language = document.forms["newRegister"]["language"].value;
    employee = [firstName, lastName, age, position];

    if(position == "Gerente"){
        employee.push(department)
    }else if(position == "Desenvolvedor"){
        employee.push(language)
    }

    alert(employee[3])
    return employee[0] = firstName, employee[1] = lastName, employee[2] = age, employee[3] = position, employee[4]
}


if(employee){
    alert(employee)
    if(employee[3] == "Gerente"){
        alert("gerente")
    }else if(employee[3] == "Desenvolvedor"){
        alert("desenvolvedor")
    }
}