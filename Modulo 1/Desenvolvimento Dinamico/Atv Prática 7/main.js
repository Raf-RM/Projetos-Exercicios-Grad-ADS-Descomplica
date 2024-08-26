var numbers = [1,2,3,4,5,6,7,8,9];
var sum = 0;
var cont = 0;

do{
    sum = numbers.reduce(function(total, number){
        cont++
        return total + number
    },sum)
    
}while(cont < numbers.length)


console.log(sum)