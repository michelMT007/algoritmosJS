var nomesDosPresentes = ["Talissa", "Raissa", "Joao", "Peter", "Paul", "Brian", "Suse", "Ubuntu", "Lars", "Denni", "Robert"];

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    var retorno = false;
    var alunoPresente = "";
    var alunoFaltou = "";

    if (nomesDosPresentes.indexOf(nomeDoAluno) >= 0) {
        alunoPresente = nomesDosPresentes[nomesDosPresentes.indexOf(nomeDoAluno)];
        console.log(alunoPresente + " esta presente na aula!");
        retorno = true;
    } else {
        alunoFaltou = nomeDoAluno;
        console.log(alunoFaltou + " ausente na aula!");
        retorno = false;
    }

    return retorno;

}
estavaPresenteNaAula("Taliss", nomesDosPresentes);