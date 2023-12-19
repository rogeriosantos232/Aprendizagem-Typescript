function logar(user:string,pass:string):void {
    console.log(`User: ${user}`);
    console.log(`Senha: ${pass}`);
}

logar("Rogério","123")

function soma2(n1:number,n2:number):number{
    return n1+n2;
}
let nRes:number=soma2(10,5)
let sRes:string=soma2(2,8).toString()

console.log(nRes)
console.log(sRes)