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

function addNewEmployee() {
    var firstName = document.forms["newRegister"]["firstName"].value
    var lastName = document.forms["newRegister"]["lastName"].value;
    var age = document.forms["newRegister"]["age"].value;
    var position = document.forms["newRegister"]["position"].value;
    var department = document.forms["newRegister"]["department"].value;
    var language = document.forms["newRegister"]["language"].value;
    var employee = [firstName, lastName, age, position];

    if(position == "Gerente"){
        employee.push(department)
        var func0 = new Gerente(firstName, age, position, department)
        func0.seApresentar
    }else if(position == "Desenvolvedor"){
        employee.push(language)
    }

   var newLi = `
        <li class="list-group-item d-flex justify-content-between lh-sm" id="employee${listEmployees.children.length}" >
            <div>
                <h6 class="my-0">${firstName}</h6>
                <small class="text-body-secondary">${position}</small>
                <span class="badge bg-danger rounded-pill">Inativo</span>
                
            </div>
            <div>
                <span class="btn btn-primary">Trabalhar</span>
                <span class="btn btn-success" onclick='apresentar(employee)'>Apresentar</span>
            </div>
        </li>
    `
    listEmployees.innerHTML += newLi
    event.preventDefault();
}


