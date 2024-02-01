class Veiculo {
    constructor (marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL){
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia
        this.capacidadeTanque = capacidadeTanque
        this.imagemURL = imagemURL
    }

    calcularDistanciaMaxima (){
        return this.autonomia*this.capacidadeTanque
        

    }

    exibirDetalhes(){
    return `${this.marca} - ${this.modelo} - ${this.cor} - R$ ${preco.tofixed(2)}`


    }
}

let veiculos = [];

veiculos.push(new Veiculo("Fiat", "Uno", 60000, "branco", 16, 90,"www.hotmail.com" ))
veiculos.push(new Veiculo("Chevrolet", "Chevette", 70000, "Vermelho", 8, 70,"www.uol.com" ))
veiculos.push(new Veiculo("chrevrolet", "cruze", 120000, "amarelo", 11, 90, "www.url45.com"));

console.log(veiculos);