class Cliente {
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }

}

class Conta {
    constructor(cliente, numero, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque){
        //verficar se o saldo é maior ou igual ao valor
        //e verficar se o valor é maior que 0
        //retornar true em caso de sucesso, false caso não

        if(this.saldo >= valorSaque  && valorSaque >=0){
            this.saldo -= valorSaque;
            return true;
        } return false;          
    }

    depositar(valorDeposito){
        //se o valor for maior que zero, soma valor ao saldo
        if(valorDeposito >0){
            this.saldo += valorDeposito;
            return true;
        } return false;                
    }

    transfererir(valorTransferencia, contaDestino) {
        //se consigo sacar dessa conta 
        //posso depositar na conta destino

        //METODO JUVENIL
        // if(this.saldo >= valorTransferencia  && valorTransferencia >0){
        //     this.saldo -= valorTransferencia;
        //     conta.saldo += valorTransferencia;
        //     return true;
        // }

        //CÓDIGO LIMPO
        if(this.sacar(valorTransferencia)) {            
            conta.depositar(valorTransferencia)
            return true;
        }
        
        return false;
    
        
    }
}

class ContaCorrente extends Conta{
    constructor(cliente, numero, saldo, limiteChequeEspecial){
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque){
        //somar o valor do cheque especial ao valor do saldo
        //verificar se pode sacar com base nessa soma
        
        const valorLimiteEspecial = this.saldo + this.limiteChequeEspecial;
        if (valorSaque <= valorLimiteEspecial){
            return super.sacar(valorSaque) 
        }
        return false

        
         
        

        //METODO JUVENIL
        // if(this.saldo + this,this.limiteChequeEspecial >= valorSaque > 0){
        //     this.saldo -= valorSaque;
        //     return true;
        // }
        // return false;
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento){
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }
    
    aplicarRedimento(){
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];


// let clienteA = new Cliente("Chapolin", "1234567890");
// clientes.push(clienteA);
// let clienteB = new Cliente("Chaves", "0987654321");
// clientes.push(clienteB);

// let contaX = new ContaCorrente(clienteA, 123, 100, 150);
// contas.push(contaX);
// let contaY = new ContaPoupanca(clienteB, 567, 100, 0.01);
// contas.push(contaY);
// let contaZ = new ContaCorrente(clienteB, 235, 0, 180);
// contas.push(contaZ);

// //console.log("Contas:", contas);
// //console.log("Clientes:", clientes,);

// //console.log(contaY.cliente.nome);

// contaY.transfererir(50, contaX);
// console.log("contaY:", contaY);
// console.log("contaX:", contaX);