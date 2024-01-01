interface curso{
    titulo:string;
    des:string;
    aula:number;
    maxAlunos?:number;
    iniciarCurso?(teste:string):void;
}

interface cursoProg extends curso{
    aula:number;
    maxAlunos?:number;
}

interface cursoArtes extends curso{
    aula:number;
    maxAlunos?:number;
}

let curso1:cursoProg
let curso2:cursoArtes
let curso3:cursoArtes


curso1={titulo:"Typescript",des:"Curso de Typescript",aula:100,maxAlunos:25}
curso2={titulo:"Javascript",des:"Curso de Javascript",aula:200,maxAlunos:150}
curso3={titulo:"C++",des:"Curso de C++",aula:150}
console.log(curso1)
console.log(curso2)
console.log(curso3)