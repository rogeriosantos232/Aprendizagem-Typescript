"use strict";
class Computador {
    nome;
    ram;
    cpu = 0;
    ligado = false;
    constructor(n, r, c) {
        this.nome = n;
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
        console.log("Novo computador criado");
    }
    info() {
        console.log("-------------------------------");
        console.log(`Nome...: ${this.nome}`);
        console.log(`Memoria...: ${this.ram}`);
        console.log(`Cpu...: ${this.cpu}`);
        console.log(`Ligado...: ${this.ligado ? "Sim" : "Não"}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtd) {
        if (qtd >= 0 && qtd <= 1000) {
            this.ram += qtd;
        }
        else {
            console.log(`Quantidade ${qtd} não é permitida`);
        }
    }
}
const comp1 = new Computador("Windows", 16, 100);
const comp2 = new Computador("Linux", 8, 50);
const comp3 = new Computador("MacOS", 24, 75);
comp1.upRam(100);
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();
