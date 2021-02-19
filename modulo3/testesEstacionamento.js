// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa) {
    var calcEntradas=0;    
    for (var i = 0; i <= placas.length; i++) {
        if (placa == placas[i]) {
            calcEntradas++;
        }
    }
    console.log(calcEntradas);
    return calcEntradas;
}

function calcularValorDevido(placa) {
    var entradas= calcularNumeroDeEntradas(placa);
    if (entradas <= 20) {
        console.log("Até 20 entradas no estacionamento. Valor a ser pago: R$ 10,00 reais");
    } else {
        entradaAlemCota20 = (entradas - 20);
        var valorAPagar = entradaAlemCota20 * 5.00;
        //console.log("Ultrapassou a cota de 20 entradas, total de: " + valorAPagar + "Portanto valor a pagar é: " + valorAPaga);
        console.log("Ultrapassou a cota de 20 entradas: R$"+valorAPagar+" Reais");
    } 
}
calcularValorDevido('ORO-7142');
