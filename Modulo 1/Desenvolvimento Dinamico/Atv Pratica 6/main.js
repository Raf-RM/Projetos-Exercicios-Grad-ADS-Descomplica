let escolhaCliente = "café";

switch (escolhaCliente) {
    case "café":
        valor = 2.5;
        console.log(`1x ${escolhaCliente} - preço un: ${valor.toFixed(2)}`);
        break;
    case "leite":
        valor = 3.25;
        console.log(`1x ${escolhaCliente} - preço un: ${valor.toFixed(2)}`);
        break;
    case "chá":
        valor = 2;
        console.log(`1x ${escolhaCliente} - preço un: ${valor.toFixed(2)}`);
        break;
    default:
        console.log(`Você deve selecionar entre as opções disponíveis no cardápio:\ncafé \nleite \nchá`);
        break;
}