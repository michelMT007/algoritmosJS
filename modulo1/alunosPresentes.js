var nomesDosPresentes = ["Talissa", "Raissa", "Joao","Peter","Paul","Brian","Suse","Ubuntu","Lars","Denni", "Robert"];
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    var retorno=false;
    var alunoPresente="";
    var alunoFaltou="";
    for(var i=0; i<nomesDosPresentes.length; i++){
        if(nomeDoAluno == nomesDosPresentes[i]){
            alunoPresente=nomesDosPresentes[i];
            console.log(alunoPresente+ ", presente na aula!");
            retorno = true;
        }      
    }
    if(retorno == false){
        console.log(nomeDoAluno+ ", faltou à aula!");
    }
    
    return retorno;
}
estavaPresenteNaAula("Mice", nomesDosPresentes);
