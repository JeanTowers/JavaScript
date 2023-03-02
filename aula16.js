const objs = document.getElementsByTagName("div")

// let num=[10,20,30,40,50]


console.log("FOR OF")
for (o of objs) {
    console.log(o.innerHTML="Curso")
}

console.log("FOR IN")
for (o in objs) {
    console.log(o)
}



// console.log("FOR")
// for (let  i= 0; i < num.length; i++) {
//     console.log(num[i]) ;
    
// }