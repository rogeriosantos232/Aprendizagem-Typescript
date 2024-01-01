"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Veiculos.Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(10, 250, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Veiculos.Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 150), 3);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
        temTurbo() {
            return (Turbo ? true : false);
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const iCarro1 = new Veiculos.CarroEsportivo("Lamborghini", 2);
const iCarro2 = new Veiculos.CarroPopular("HB20", 1);
console.log(iCarro1.meuNome);
console.log(iCarro1.minhaCor);
console.log(iCarro1.estouLigado);
console.log(iCarro1.ligar());
console.log(iCarro1.estouLigado);
console.log(iCarro1.minhaPotencia);
console.log(iCarro2.meuNome);
console.log(iCarro2.minhaCor);
console.log(iCarro2.estouLigado);
console.log(iCarro2.ligar());
console.log(iCarro2.estouLigado);
console.log(iCarro2.minhaPotencia);
