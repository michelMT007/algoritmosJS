function transformaParaMaiusculo(palavras) {
    var nomesDosPresentes = palavras;
    var presentes=[];
    var nome;
    for (var i = 0; i < nomesDosPresentes.length; i++) {
        nome=nomesDosPresentes[i].toUpperCase();
        //presentes.push(`${nome}`);
        presentes.push(nome);
    }
    console.log(presentes);
}
transformaParaMaiusculo(["dfgsdfgsd","hello dworoeo"]);