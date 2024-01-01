//aulas 16,17,18 e 19

class Computador {
    public nome: string //Parametro é igual a um variável dentro de uma classe
    private ram: number
    private cpu: number = 0
    private ligado: boolean = false /* com o método "private, a variável não poderá ser modificada fora de sua classe" */

    //na maioria das linguagens, a gente cria uma classe construtora criando uma função(em orientação a objetos é chamado de método) com o mesmo nome da classe, mas em typescript, criaremos uma função construtora utilizando o nome constructor



    constructor(n: string, r: number, c: number) { //em outras linguagens seriam Computador(){}
        this.nome = n
        this.ram = r
        this.cpu = c
        this.ligado = false
        console.log("Novo computador criado")
    }

    info(): void {
        console.log("-------------------------------")
        console.log(`Nome...: ${this.nome}`)
        console.log(`Memoria...: ${this.ram}`)
        console.log(`Cpu...: ${this.cpu}`)
        console.log(`Ligado...: ${this.ligado ? "Sim" : "Não"}`)
    }

    ligar(): void {
        this.ligado = true
    }
    desligar(): void {
        this.ligado = false
    }
    upRam(qtd: number): void {
        if (qtd >= 0 && qtd <= 1000) {
            this.ram += qtd
        } else {
            console.log(`Quantidade ${qtd} não é permitida`)
        }
    }
}

//Instanciar
const comp1 = new Computador("Windows", 16, 100)
const comp2 = new Computador("Linux", 8, 50)
const comp3 = new Computador("MacOS", 24, 75)

comp1.upRam(100)
comp1.ligar()
comp1.info()
comp2.info()
comp3.info()


