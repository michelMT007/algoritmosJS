function calculaValorDevido(pesoDeRoupaSuja){
    var valorcorreto;
    if(pesoDeRoupaSuja <1){
        valorcorreto=(10.00);
        console.log(valorcorreto);
    }else{
        valorcorreto=((pesoDeRoupaSuja*3.00)+10.00);
        console.log(valorcorreto);
    }
    return valorcorreto;
}
calculaValorDevido(5);
