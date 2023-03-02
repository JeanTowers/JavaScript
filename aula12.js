// const jogador1={nome:"Jean",energia:100,vidas:3}
// const jogador2={nome:"Carlos",energia:100,vidas:3}
// const jogador3={...jogador1,...jogador2}

// console.log(jogador3)



// let n1 = [10,20,30]
// let n2 = [11,22,33,44,55]
// let n3 = [n1,n2]

// console.log("n3: " + n3)


// const soma = (v1,v2,v3)=>{
//     return v1+v2+v3
// }

// let valores = [1,5,4,10]

// console.log(soma(...valores))


const objs1 = document.getElementsByTagName("div")

const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(Element =>{
    Element.innerHTML = "Curso"
})


console.log(objs1)

console.log(objs2)