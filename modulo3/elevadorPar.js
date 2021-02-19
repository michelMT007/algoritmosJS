var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]
function elevador(){
    var andar=0;
    for(var i=0; i<=6; i++){
        andar+=1;
        if(andar%2 == 0){
            console.log("O morador "+moradores[i]+" pode usar o elevador.");
        }
        else{
            //console.log(andar+" impar");
        }
        
    }
}
elevador()