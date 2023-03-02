function  soma(...valores){
    let tam = valores.length
    let res = 0

    for (let i=0; i<tam; i++) {
        res += valores[i]
    }
    
    return res  
}


let result_soma = soma(10,5,4)
console.log(result_soma)
