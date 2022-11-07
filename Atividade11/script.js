/* Retangulo */

class Retangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calcArea() {
        return this.x * this.y;
    }
}


objetoRetangulo = new Retangulo(50, 25);
alert(objetoRetangulo.calcArea());

/* Tipo conta */


class conta {
    constructor(nome, banco, numConta, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    get getNome() {
        return this.nome;
    }
    get getBanco() {
        return this.banco;
    }
    get getNumConta() {
        return this.numConta;
    }
    get getSaldo() {
        return this.saldo;
    }

    set setNome(valor) {
        this.nome = valor;
    }
    set setBanco(valor) {
        this.banco = valor;
    }
    set setNumConta(valor) {
        this.numConta = valor;
    }
    set setSaldo(valor) {
        this.saldo = valor;
    }
}

class contaCorrente extends conta {
    constructor(nome, banco, numConta, saldo) {
        super(nome, banco, numConta, saldo);
    }

    saldoEsp;

    get getSaldoEsp() {
        return this.saldoEsp;
    }
    set setSaldoEsp(valor) {
        this.saldoEsp = valor;
    }

}

class contaPoupanca extends conta {
    constructor(nome, banco, numConta, saldo) {
        super(nome, banco, numConta, saldo);
    }
    juros;
    dataVencimento;

    get getJuros() {
        return this.juros;
    }
    set setJuros(valor) {
        this.juros = valor;
    }

    get getDataVencimento() {
        return this.dataVencimento;
    }
    set setDataVencimento(valor) {
        this.dataVencimento = valor;
    }
}

var contaCor = new contaCorrente();
contaCor.setNome = "Yasmin Rosa";
contaCor.setBanco = "Nubank";
contaCor.setNumConta = 111111;
contaCor.setSaldo = 1100;
contaCor.setSaldoEsp = 500;

var contaPou = new contaPoupanca();
contaPou.setNome = "Yasmin Rosa";
contaPou.setBanco = "Nubank";
contaPou.setNumConta = 11111;
contaPou.setSaldo = 2000;
contaPou.setJuros = 10;
contaPou.setDataVencimento = "31/12/2024";

i = prompt("O que deseja saber? \nDigite 1 para Saldo Especial \nDigite 2 para Poupança");

switch (i) {
    case "1":
        alert("---CONTA CORRENTE---\nNome: " + contaCor.getNome + "\nBanco: " + contaCor.getBanco + "\nNúmero da conta: " + contaCor.getNumConta +
            "\nSaldo: R$" + contaCor.getSaldo.toFixed(2) + "\nSaldo Especial: R$" + contaCor.getSaldoEsp.toFixed(2));
        break;

    case "2":
        alert("---POUPANÇA---\nNome: " + contaPou.getNome + "\nBanco: " + contaPou.getBanco + "\nNúmero da conta: " + contaPou.getNumConta +
            "\nSaldo: R$" + contaPou.getSaldo.toFixed(2) + "\nJuros: " + contaPou.getJuros + "%\nData de Vencimento: " + contaPou.getDataVencimento);
        break;

    default:
        alert("CResposta inválida!");
        break;
}
