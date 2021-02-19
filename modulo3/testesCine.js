var todasNotas=[0,0,1,1,2,2,3,3,4,4,5,5,0 ];

function calculaGostos(notas) {
    var nNaoGostaram=0;
    var nMediano=0;
    var nGostaram=0;
    var todasnotas = notas;
    
    for (var i = 0; i <= notas.length; i++) {
        //console.log((todasnotas[i] <= 0 && todasnotas[i] == 1) );
        if (todasnotas[i] == 0 || todasnotas[i] == 1) {
            nNaoGostaram++;
        }

        if (todasnotas[i] == 2 || todasnotas[i] == 3) {
            nMediano++;
        }

        if (todasnotas[i] == 4 || todasnotas[i] == 5) {
            nGostaram++;
        }
    }
    console.log([nNaoGostaram, nMediano, nGostaram])
    return [nNaoGostaram, nMediano, nGostaram];
}

calculaGostos(todasNotas);