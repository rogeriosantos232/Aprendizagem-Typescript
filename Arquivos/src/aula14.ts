

const teste=(txt?:string):void=>{
    console.log(txt);
}

const fsoma2=(n:number[]):number=>{
    let s:number=0
    n.forEach((e)=>{
        s+=e
    })
    return s
}

teste("CFB Cursos")
teste("Curso de TypeScript")
teste("Youtube")
teste()

let numer:number[]=[10,20,30,40]

console.log(fsoma2(numer))