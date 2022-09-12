// const PI = 3.14;
// const raio = 2.00; 
// let AreaDoCirculo = PI * raio*2 

// console.log(AreaDoCirculo)

//Função com retorno
function AreaDoCirculo(PI = 0, raio) {
    return PI * raio * 2; 
}

console.log(AreaDoCirculo(3.14, 2.0))

//Função Anônima
const AreaDoCirculoAnonima = function(PI, raio) {
    console.log(PI * raio * 2)
}

AreaDoCirculoAnonima(3.14, 2.0)

//Arrow Function 
const AreaDoCirculoArrow = (PI, raio) => {
    return PI * raio * 2
}

console.log(AreaDoCirculoArrow(3.14, 2.0))
