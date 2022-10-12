//Ex 1
let dobro = function(a) {
    return 2 * a
}

//Ex 2
dobro = (a) => {
    2 * a 
}

//Ex 3
dobro = a => 2 * a //return está implícito  
console.log(dobro(Math.PI))


let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' //possui em param
console.log(ola())