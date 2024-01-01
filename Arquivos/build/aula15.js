"use strict";
function fsoma3(...n) {
    let s = 0;
    for (let el of n) {
        s += el;
    }
    return s;
}
console.log(fsoma3(10, 20, 30, 40));
