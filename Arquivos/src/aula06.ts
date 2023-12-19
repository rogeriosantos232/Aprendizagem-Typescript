let v1numeros=[0,10,20,30]
let v2numeros:Array<number|string>=[20,30,40,"A"]
let v3numeros:(number|string)[]=[30,40,50,"Rogério"]
console.log(v1numeros)
console.log(v2numeros)
console.log(v3numeros)

v1numeros.push(10)
v1numeros.unshift(10)
console.log(v1numeros)

v2numeros.pop()
console.log(v2numeros)

let numeros_ro:ReadonlyArray<number>=[100,200,300] //Array somente para leitura, sem poder fazer modificações