function processName(nome, callback){
    if(typeof nome !== "string"){
        callback(new Error("O nome deve ser uma string!"), null);
        return;
    }

    if(nome.lenght === 0){
        callback(new Error("É necessário inserir um nome!"));
        return;
    }

    callback(null, "Nome processado com sucesso!")
}

processName(32,(error, result) => {
    if(error){
        console.log("Ocorreu um problema. ", error.message)
    }else{
        console.log(result)
    }
})

