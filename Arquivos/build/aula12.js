"use strict";
function logar(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Senha: ${pass}`);
}
logar("Rogério", "123");
function soma2(n1, n2) {
    return n1 + n2;
}
let nRes = soma2(10, 5);
let sRes = soma2(2, 8).toString();
console.log(nRes);
console.log(sRes);
