function fsoma3(...n:number[]){
let s:number=0
for(let el of n){
    s+=el
}
    // n.map((el)=>{
    //     s+=el
    // })
    return s
}
console.log(fsoma3(10,20,30,40))