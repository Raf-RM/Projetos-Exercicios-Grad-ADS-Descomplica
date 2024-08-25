let novoCadastro = ["Rafael", "Rodrigues Mateus", 33, 2, [11,"março",1991]];

let dadosTratados = novoCadastro.map(function(item){
    if(typeof(item) == 'string'){
        return item.toUpperCase()
    }else if(typeof(item) == 'number'){
        return item * 2 
    }else{
        return item
    }
})
console.log(dadosTratados)

let somenteNumeros = novoCadastro.filter(item => typeof(item) == 'number')
console.log(somenteNumeros)

let somatorio = somenteNumeros.reduce(function(total,valor){
    return total + valor
},0)
console.log(somatorio)

