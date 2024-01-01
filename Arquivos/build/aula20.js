"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 1000000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero:${this.numero}`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo Insuficiente.`);
        }
    }
}
class ContaPF extends Conta {
    taxaCalculo = 10;
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    calcularTrib(valor) {
        return valor * this.taxaCalculo;
    }
    info() {
        console.log(`Tipo...:PF`);
        super.info();
        console.log(`CPF....:${this.cpf}`);
        console.log(`------------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo...:CNPJ`);
        super.info();
        console.log(`CNPJ...:${this.cnpj}`);
        console.log(`------------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor de saque muito grande ou muito pequeno para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const conta1 = new ContaPF(11122233344, "Rogério");
const conta2 = new ContaPJ(222333, "RF");
conta1.info();
conta2.info();
conta1.deposito(800);
conta1.deposito(200);
conta1.deposito(1000);
conta1.saque(1000);
console.log(conta1.saldo);
conta1.saque(500);
console.log(conta1.saldo);
conta1.saque(450);
console.log(conta1.saldo);
conta1.saque(50);
console.log(conta1.saldo);
conta1.saque(10);
console.log(conta1.saldo);
