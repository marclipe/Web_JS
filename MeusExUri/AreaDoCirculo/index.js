// const PI = 3.14;
// const raio = 2.00; 
// let AreaDoCirculo = PI * raio*2 

// console.log(AreaDoCirculo)

function AreaDoCirculo(PI = 0, raio) {
    return PI * raio * 2; 
}

console.log(AreaDoCirculo(3.16, 2.0))


const AreaDoCirculoAnonima = function(PI, raio) {
    console.log(PI * raio * 2)
}

AreaDoCirculoAnonima(3.16, 2.0)