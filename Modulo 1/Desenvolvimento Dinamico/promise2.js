function somarArray(array){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(array)){
            reject("O argumento não é um array!")
        }

        const soma = array.reduce((total, num) => total + num,0);

        resolve(soma)
    })
}

const myArray = [1,2,3,4,5];

somarArray(myArray)
.then((resultado) => {
    console.log("a soma dos elementos é: " + resultado)
}).catch((erro) => {
    console.log("Ocorreu um erro:", erro)
})