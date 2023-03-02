let n = 0
let max = 1000
let pares = 0
// while (n<max) {
//     console.log("Cursos - " + n)
//     if(n>10){
//         break
//     }
//     n++
// }
// console.log("FIM While") 

for (let i = n; i < max; i++) {
    if(i%2!==0){
        continue
    }
    pares++
}
console.log("Pares = " + pares)
console.log("FIM For")