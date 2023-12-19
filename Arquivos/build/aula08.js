"use strict";
let dados = {
    nome: "Regis Junior",
    idade: "23",
    status: "A",
    ola: () => { console.log("Oi"); },
    info: (p) => { console.log(p); }
};
console.log(typeof (dados));
console.log(dados.nome);
dados.ola();
dados.info("Rogério");
dados.info(dados.nome);
