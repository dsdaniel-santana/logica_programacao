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