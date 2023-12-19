class Curso{
    canal=null
    curso=null
    constructor(canal:any,curso:any){
        this.canal=canal
        this.curso=curso
    }
}
let c1=new Curso("Rogério223","TypeScript");
console.log(c1.canal)
console.log(c1.curso)

// Utilizar o comando tsc + nome do arquivo + --target "ESNEXT" faz com que o typescript utilize a ultima versão disponível do EcmaScript/JS 

// tsc --init cria um arquivo tsconfig.json para realizar as configurações da compilação do ts