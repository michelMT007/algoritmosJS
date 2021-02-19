var baralho = ["Ás", "Dama", "Rei", "Valete"]

//Seu código aqui
function encontrarRei(){
    for(var i =0; i < baralho.length; i++){
        if(baralho[i]=="Rei"){
            console.log("Encontrei o "+baralho[i]+"!");
            break
        }
    }
}
encontrarRei();