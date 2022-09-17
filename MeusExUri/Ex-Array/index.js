const list = ["coffee", "eggs", "flower", "sugar", "rice"]

const price = [5.0, 1.0, 3.5, 4, 10]


const shopping = {
    coffee: 50.00,
    eggs: 1.0, 
    flower: 3.5, 
    sugar: 4, 
    rice: 10, 
    spice() {
        console.log("salt + mango")
    }
}

console.log("O valor do café é: " + delete shopping.coffee)

console.log(`O tamanho do array de lista é ${list.length}`)


console.log(`Adicionando o macarrão na minha lista ${list.push('pasta')}`)
console.log(list)

console.log(`Retirando o macarrão na minha lista ${list.pop('pasta')}`)
console.log(list)

console.log(`Apagando meu array com índice 0 ${delete list[0]}`)
console.log(list)


const shoppingMarc = function(coffee, milk) {
    return coffee + milk
}

console.log(shoppingMarc(6, 2))

function shoppingLipe(coffee, milk) {
    console.log(coffee + milk)
}

shoppingLipe(6, 2)

let shoppingML = (milk, coffee) => {
    return milk + coffee
}

console.log(shoppingML(6,2))

let Anonima = function(coffee, milk) {
    console.log(coffee + milk)
}

Anonima(7,3)

console.log(list.spice())
