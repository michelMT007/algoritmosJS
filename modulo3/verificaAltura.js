var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(usuario){
    var retorno=false;
    if(usuario[2] >=170  && usuario[1]>=18)
    {
        retorno = true;
        console.log(`O aluno tem ${usuario[1]} anos e tem altura é de ${usuario[2]}cm.`)
    }else{
        retorno = false;
        console.log(`O aluno tem ${usuario[1]} e tem altura de ${usuario[2]} cm.`)
    }    
    console.log(retorno)
    console.log("")

    if(retorno){
        console.log("O aluno e esta apto, tem maioridade e tem altura suficiente para engressar no grupo")
    }else{
        console.log("O aluno e esta inapto, não tem maioridade ou não tem altura suficiente para engressar no grupo")
    }
    return retorno;
}

maiorAlto(usuario1);
