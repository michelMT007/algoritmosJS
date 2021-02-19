var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

//seu loop aqui
function somarLucro(){
    for(var i =0; i < listaDeLucro.length; i++){
        lucroTotal +=listaDeLucro[i]; 
    }
    console.log("Valor do Lucro Total é: "+lucroTotal);
}
somarLucro();