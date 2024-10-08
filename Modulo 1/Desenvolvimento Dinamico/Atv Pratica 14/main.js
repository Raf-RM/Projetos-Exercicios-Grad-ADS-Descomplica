class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar() {
        alert(`Olá! Me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`)
    }

    trabalhar() {
        alert(`${this.nome} está trabalhando`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        alert("Gerenciando.")
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        alert("Programando.")
    }
}

const listEmployees = document.getElementById("listEmployees");
const employees = [];

function addNewEmployee() {
    var name = document.forms["newRegister"]["name"].value
    var age = document.forms["newRegister"]["age"].value;
    var position = document.forms["newRegister"]["position"].value;
    var department = document.forms["newRegister"]["department"].value;
    var language = document.forms["newRegister"]["language"].value;

    var func;

    try{

        if(name == "" || age =="" || position == "" ){
            exibirErro() 
        }

        if (position == "Gerente") {
            func = new Gerente(name, age, position, department)
        } else if (position == "Desenvolvedor") {
            func = new Desenvolvedor(name, age, position, language)
        }

        employees.push(func)

        var newLi = `
            <li class="list-group-item d-flex justify-content-between lh-sm" id="employee${listEmployees.children.length}" >
                <div>
                    <h6 class="my-0">${func.nome}</h6>
                    <small class="text-body-secondary">${func.cargo}</small>
                    <span id="status" class="badge bg-danger rounded-pill">Inativo</span>
                    
                </div>
                <div>
                    <span id="btnWork" class="btn btn-primary" onclick="employees[${employees.length - 1}].trabalhar()">Trabalhar</span>
                    <span class="btn btn-success" onclick="employees[${employees.length - 1}].seApresentar()">Apresentar</span>
                </div>
            </li>
        `
    
        if (position == "Gerente") {
            newLi = `
            <li class="list-group-item d-flex justify-content-between lh-sm" id="employee${listEmployees.children.length}" >
                <div>
                    <h6 class="my-0">${func.nome}</h6>
                    <small class="text-body-secondary">${func.cargo}</small>                
                </div>
                <div>
                    <span class="btn btn-primary" onclick="employees[${employees.length - 1}].gerenciar()">Gerenciar</span>
                    <span class="btn btn-primary" onclick="employees[${employees.length - 1}].trabalhar()">Trabalhar</span>
                    <span class="btn btn-success" onclick="employees[${employees.length - 1}].seApresentar()">Apresentar</span>
                </div>
            </li>
            `
        } else if (position == "Desenvolvedor") {
            newLi = `
            <li class="list-group-item d-flex justify-content-between lh-sm" id="employee${listEmployees.children.length}" >
                <div>
                    <h6 class="my-0">${func.nome}</h6>
                    <small class="text-body-secondary">${func.cargo}</small>                
                </div>
                <div>
                    <span class="btn btn-primary" onclick="employees[${employees.length - 1}].programar()">Programar</span>
                    <span class="btn btn-primary" onclick="employees[${employees.length - 1}].trabalhar()">Trabalhar</span>
                    <span class="btn btn-success" onclick="employees[${employees.length - 1}].seApresentar()">Apresentar</span>
                </div>
            </li>
            `
        }
    
        listEmployees.innerHTML += newLi
    }catch(error){
        alert(error.message)
    }

    event.preventDefault();
}

function exibirErro(){
    throw new Error("Erro! Campos marcados com asterísco são obrigatórios.")
}