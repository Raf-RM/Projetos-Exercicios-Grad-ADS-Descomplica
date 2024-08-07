let a = [10,20,30,40,50,60];

for(let valor of a){
    console.log(valor);
}

a.forEach(valor => console.log(valor));

let total = 0
a.forEach(valor => {
    total += valor
});
console.log(total);

a.forEach(function(valor, indice, array){
    console.log(valor, indice, array, array[indice]);
})