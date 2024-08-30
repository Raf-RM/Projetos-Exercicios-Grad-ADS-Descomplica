class DispositivoEletrônico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Dispositivo já está ligado!")
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletrônico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
var s1 = new SmartPhone("Samsung", "Preto", "A71");
console.log(s1)