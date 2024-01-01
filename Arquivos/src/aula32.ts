namespace Veiculos {
    enum Cores{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}
    export abstract class Carro {
        private nome: string
        private motor:Motores.Motor
        private cor:String
        constructor(nome: string,motor:Motores.Motor,cor:Cores) {
            this.nome = nome
            this.motor = motor
            this.cor = Cores[cor]
        }
        public ligar(){
            this.motor.liga=true
        }
        public desligar(){
            this.motor.liga=false
        }
        get minhaCor(){
            return this.cor
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
            return (this.motor.liga?"Sim":"Não")
        }
        get minhaPotencia(){
            return this.motor.potencia
        }
    }


export class CarroEsportivo extends Veiculos.Carro{
    constructor(nome: string,cor:Cores){
        super(nome, new Motores.Motor(10,250, new Motores.Turbo(100)),2)
    }
}
export class CarroPopular extends Veiculos.Carro{
    constructor(nome: string,cor:Cores){
        super(nome, new Motores.Motor(3,150),3)
    }
}
}


namespace Motores {
    export class Turbo {
        private pot: number
        constructor(pot: number) {
            this.pot = pot
        }
        get potencia(){
            return this.pot
        }
    }
    export class Motor {
        private ligado:boolean
        private cilindros:number
        private pot:number
        constructor(cilindros:number,pot:number,turbo?:Turbo) {
            this.ligado=false
            this.cilindros=cilindros
            this.pot=pot + (turbo?turbo.potencia:0)
        }
        set liga(ligado:boolean){
            this.ligado=ligado
        }

        get liga(){
            return this.ligado
        }
        get potencia(){
            return this.pot
        }
        temTurbo():boolean {
            return (Turbo?true:false)
        }
    }
}

const iCarro1= new Veiculos.CarroEsportivo("Lamborghini",2)
const iCarro2= new Veiculos.CarroPopular("HB20",1)

console.log(iCarro1.meuNome)
console.log(iCarro1.minhaCor)
console.log(iCarro1.estouLigado)
console.log(iCarro1.ligar())
console.log(iCarro1.estouLigado)
console.log(iCarro1.minhaPotencia)

console.log(iCarro2.meuNome)
console.log(iCarro2.minhaCor)
console.log(iCarro2.estouLigado)
console.log(iCarro2.ligar())
console.log(iCarro2.estouLigado)
console.log(iCarro2.minhaPotencia)