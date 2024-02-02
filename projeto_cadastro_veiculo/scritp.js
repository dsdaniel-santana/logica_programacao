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

//Função para cadastrar veículo
function cadastrarVeiculo(){
    //recebimento de valores do HTML
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const preco = parseFloat (document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt (document.getElementById("autonomia").value);
    const capacidadeTanque = parseInt (document.getElementById("capacidadeTanque").value);
    const imagemURL = document.getElementById("imagemURL").value;

    // Instanciar um novo objeto veículo, passando os valores pedidos no construtor
    const veiculo = new Veiculo(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL);

    //Adcionar veículo a nossa lista "banco de dados"
    veiculos.push(veiculo);

    
    console.log(veiculos);

    //Limpar Formulário
    document.getElementById("veiculoForm").reset();

} 
    

// veiculos.push(new Veiculo("Fiat", "Uno", 60000, "branco", 16, 90,"www.hotmail.com" ))
// veiculos.push(new Veiculo("Chevrolet", "Chevette", 70000, "Vermelho", 8, 70,"www.uol.com" ))
// veiculos.push(new Veiculo("chrevrolet", "cruze", 120000, "amarelo", 11, 90, "www.url45.com"));

// console.log(veiculos);