function gerarDezenas(menorNum, maiorNumero, incrementoNumero){
var min, max, incremento;
    min=menorNum;
    max=maiorNumero;
    for(var i=min; i<=max; i=i+incremento){
        console.log(i);
    }
    
}gerarDezenas(1, 100, 3);