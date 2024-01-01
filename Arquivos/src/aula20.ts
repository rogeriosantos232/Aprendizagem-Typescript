//Aula 20 à 26
abstract class Conta{
    private readonly numero:number
    protected titular:string
    private saldoconta:number
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
        this.saldoconta=0
    }
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*1000000)+1;
    }
    protected info(){
        console.log(`Titular:${this.titular}`)
        console.log(`Numero:${this.numero}`)
    }
    get saldo():number{
        return this.saldoconta
    }
    private set saldo(saldoconta:number){ //set não retorna nenhum valor, apenas o método get, o set precisa de um valor definido
    this.saldoconta=saldoconta
    }

    protected deposito(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        this.saldo+=valor
    }

    protected saque(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        if(valor <= this.saldoconta){
        this.saldo-=valor
    }else{
            console.log(`Saldo Insuficiente.`)}
        
    }
}

interface Tributos{
    taxaCalculo:number;
    calcularTrib(valor:number):number;
}

class ContaPF extends Conta implements Tributos{
    taxaCalculo=10
    cpf:number
    constructor(cpf:number,titular:string){
        super(titular)
        this.cpf=cpf
    }
    calcularTrib(valor:number):number {
        return valor*this.taxaCalculo
    }
    info(){
        console.log(`Tipo...:PF`)
        super.info()
        console.log(`CPF....:${this.cpf}`)
        console.log(`------------------------------`)
    }
    public deposito(valor:number){
        if(valor > 1000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        }else{
            super.deposito(valor)
        }
    }
    public saque(valor:number){
        if(valor > 1000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        }else{
            super.saque(valor)
        }
    }
}

class ContaPJ extends Conta{
    cnpj:number
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj
}
    info(){
        console.log(`Tipo...:CNPJ`)
        super.info()
        console.log(`CNPJ...:${this.cnpj}`)
        console.log(`------------------------------`)
    }
    public deposito(valor:number){
        if(valor > 10000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        }else{
            super.deposito(valor)}
    }
    public saque(valor:number){
        if(valor > 10000){
            console.log(`Valor de saque muito grande ou muito pequeno para este tipo de conta`)
        }else{
            super.saque(valor)
        }
    }
}

const conta1= new ContaPF(11122233344,"Rogério")
const conta2= new ContaPJ(222333,"RF")


conta1.info()
conta2.info()
// console.log(conta2.saldo())
// conta1.deposito(1111)
// console.log(conta1.saldo())

conta1.deposito(800)
conta1.deposito(200)
conta1.deposito(1000)
conta1.saque(1000)
console.log(conta1.saldo)
conta1.saque(500)
console.log(conta1.saldo)
conta1.saque(450)
console.log(conta1.saldo)
conta1.saque(50)
console.log(conta1.saldo)
conta1.saque(10)
console.log(conta1.saldo)

// conta2.deposito(10000)
// conta2.deposito(10000)
// conta2.deposito(100001)
// console.log(conta2.saldo())