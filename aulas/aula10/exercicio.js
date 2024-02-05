//modifique a classe pessoa, adicionando a ela o parametro "anoNascimento"
//crie uma função que informa se a pessoa é adulta, deve receber um ano como parametro 
//e retornar verdadeiro ou falso

class Pessoa {
    constructor(nome, anoNascimento){
        this.nome = nome
        this.anoNascimento = anoNascimento
    }
    
    seApresentar(pessoa){
        console.log(`Olá, meu nome é ${this.nome} `);
        pessoa.conhecer(this);
    }
    
    conhecer(pessoa){
        console.log(`Prazer em conhece-lo meu ${pessoa.nome} nome é ${this.nome} `);
    }

    ehAdulto() {
        let ano = new Date;
        ano = ano.getFullYear();
        
        let adulto = ano - this.anoNascimento > 18;
        let idadePositiva = ano - this.anoNascimento >= 0;

        if(adulto) {
            return true;
        } else if (!adulto && idadePositiva){
            return false;
        }

        alert("Pessoa não era nascida nesse ano!");
    }
}

const pessoaA = new Pessoa("Fulano, ", 2000);
const pessoaB = new Pessoa("Beltrano");

//pessoaB.seApresentar(pessoaA);

console.log(pessoaA.ehAdulto(2000));
