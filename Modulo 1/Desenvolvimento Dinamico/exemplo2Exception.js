const numeros = [1,2,3,4,5,"6"];

try{
    const doubleNumbers = numeros.map((num) => {
        if(typeof num !== "number"){
            throw new Error("O array só pode conter números!");
        }
        return num * 2;
    })
    console.log(doubleNumbers)
}catch(e){
    console.log("Ocorreu uma exceção: " + e.message);
}

