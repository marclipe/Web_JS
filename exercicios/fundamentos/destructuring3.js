//Vai gerar números aleatórios 
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand({max: 50, min: 40}))
console.log(rand({min: 955}))

/*Objeto vazio, vai ficar gerando números aleatórios entre 0 e 1000*/
console.log(rand({}))
