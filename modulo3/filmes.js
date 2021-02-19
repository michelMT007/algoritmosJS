var personagens = ["","Hermione", "Trinity", "Leia"]
var filmes = ["", "Harry Potter", "Matrix", "Star wars"]
var lancamentos = [0,2001, 1999, 1977]
var id = 3;


function filme(personagens, filmes, lancamentos, id) {
    
    var i;

    if (id <= 0 || id > personagens.length) {
        console.log("Essa não é uma opção válida.")
    } else {

        for (i = 0; i <= id; i++) {
            personagem=personagens[i];
            film=filmes[i];
            ano=lancamentos[i];
        }

        
        console.log(`${personagem} é um personagem do filme ${film} que estreou no cinema em ${ano}`);
    }

}
filme(personagens, filmes, lancamentos, id);
