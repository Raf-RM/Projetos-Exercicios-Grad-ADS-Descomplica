function imcPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        peso,
        altura,
        get resultadoImc(){
            var imc = (this.peso / (this.altura ** 2)).toFixed(1)
            console.log(imc)
            if(imc < 18.5){
                return "Abaixo do peso"
            }else if(18.5 <= imc && imc <= 24.9){
                return "Peso normal"
            }else if(25 <= imc && imc <= 29.9){
                return "Acima do peso (sobrepeso)"
            }else if(30 <= imc && imc <= 34.9){
                return "Obesidade I"
            }else if(35 <= imc && imc<= 39.9){
                return "Obesidade II"
            }else{
                return "Obesidade III"
            }
        }
    }
}

const pessoa1 = imcPessoa("Rafael", "Rodrigues", 130, 1.82)
console.log(pessoa1.resultadoImc)