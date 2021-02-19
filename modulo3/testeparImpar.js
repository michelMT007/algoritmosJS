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
    
    for(var i=0; i<=6; i++){
        if(i%2 == 0){
            console.log(`O morador ${moradores[i]} pode usar o elevador`);
        }
    }
}
elevador()
