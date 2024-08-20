const numbers = [2,4,6];

//Verifica se pelo menos 1 número não é par ou é menor que zero

let someEvenOrLessThanZero = false;
for(i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0 || numbers[i] < 0){
        someEvenOrLessThanZero = true;
        break
    }
}

//Verifica setodos os números no array são divisíveis por 3 e 5 ao mesmo tempo

let divisibleByThreeAndFive = true;
for(number of numbers){
    if(number%3 != 0 || number%5 != 0){
        divisibleByThreeAndFive = false;
        break
    }
}

console.log(`
    Há algum número não par ou menor que zero?
    R: ${someEvenOrLessThanZero}\n
    Todos os números são divisíveis por 3 e 5 ao mesmo tempo?
    R: ${divisibleByThreeAndFive}`
)