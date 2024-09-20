const minhaPromise = new Promise((resolve, reject)=>{
    const sucesso = falsec;
    if(sucesso){
        resolve("Deu bom!")
    }else{
        reject("Deu ruim!")
    }
})

minhaPromise.then((resultado)=>{
    console.log("Foi sucesso. " + resultado)
}).catch((erro)=> {
    console.log("Vish... " + erro)
})