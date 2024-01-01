"use strict";
function f_teste(v, r) {
    return r;
}
class cTeste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new cTeste("10");
const ct2 = new cTeste(10);
console.log(ct1.valor);
console.log(ct2.valor);
