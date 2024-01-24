class MaterialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
    
    realizarEmprestimo () {
        if(this.disponivel) {
            this.disponivel = false;
            return true; //Emprestimo realizado com sucesso
        } else {
            return false; //materia ja emprestado
        }
    

    }

    realizarDevolucao() {
        if(!this.disponivel) {
            this.disponivel = true;
            return true; //Devolução realizada com sucesso
        } else {
            return false; //Material já devolvido previamente
        }
    }
}

class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
}

class Revista extends MaterialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

function realizarAcao(acao){
    console.log("Realizou uma: " + acao);

}

const livros = [
    new Livro("Nunca Desita dos Seus Sonhos", "Augusto Cury", "AutoAjuda"),
    new Livro("A Arte da Guerra", "Sun Tzu", "Negocios"),
    new Livro("O Poder do Habito", "Charles Durring", "Desenvolvimento"),
    new Revista("Playboy", "Abril", "Entreterimento")
    
];

const selectLivros = document.getElementById("livros");

// for(let i = 0; < livros.length; i++) {
//     const livro = livro [i];
//     const option = document.createElement("option");
//     option.value = i + 1;//adciona 1 para evitar o valor 0, que representa a opção padrao
//     option.text = livro.titulo;
//     selectLivros.add(option);
// }

for(let i = 0; i < livros.length; i++) {
    const livro = livros[i];
    const option = document.createElement("option");
    option.value = i + 1; //Adiciona 1 para evitar o valor 0, que representa a opção padrão
    option.text = livro.titulo;
    selectLivros.add(option);
}