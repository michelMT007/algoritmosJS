

function sumTotalNegativos(){
    var listaDeGanhos = [10, 30, -10, -5, -1, 40]
    var totalNegativos = 0
    for(var index=0; index < listaDeGanhos.length; index++){
        var avaliacao=listaDeGanhos[index];
        if(avaliacao < 0){
            totalNegativos+=avaliacao;
        }

    }
    console.log("Total da soma dos ganhos negativos: "+totalNegativos);
}
sumTotalNegativos();