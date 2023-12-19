// NULL - UNDEFINED - UNKNOWN

// NULL - Tipo Nulo
// UNDEFINED - Indefinido
// UNKNOWN - Desconhecido

let iNome:string|null
iNome=null
console.log(iNome)

let iNome2:any
console.log(iNome2)

let iNome3:unknown=iNome // Unknown só pode ser atribuído em tipos Unknown ou Any
let vnum:any=iNome3
console.log(vnum)