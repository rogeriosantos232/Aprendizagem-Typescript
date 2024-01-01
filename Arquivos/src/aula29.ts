function f_teste<T,U>(v:T,r:U):U{
    return r
}

// console.log(f_teste<number,string>(2,`A`))
// console.log(f_teste<string,number>(`A`,2))
// console.log(f_teste<boolean,boolean>(true,false))

class cTeste<T>{
    public valor:T
    constructor(valor:T){
        this.valor=valor
    }
}

const ct1= new cTeste<string>("10")
const ct2= new cTeste<number>(10)

console.log(ct1.valor)
console.log(ct2.valor)