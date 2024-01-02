"use strict";
let [nu1, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70];
console.log(nu1);
console.log(nu2);
console.log(nu3);
const fcores = () => {
    return ["Verde", "Amarelo", "Azul", "Branco"];
};
let [co1, co2, co3, co4] = fcores();
console.log(co1);
console.log(co2);
console.log(co3);
console.log(co4);
let texto = "Curso de Javascript";
let [...t] = texto.split(" ");
console.log(t);
