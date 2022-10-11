const pilotos = ['Vattel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro - tirando o último elemento da lista 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) //Adiciona um elemento no Array na última posição

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento no começo da lista
console.log(pilotos)

//splice tanto adiciona como remove elementos de um Array 

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //no índice 2
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa quebrou :(
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo Array, ou seja aqui a partir do índice 2 ele irá gerar um novo Array 
console.log(algunsPilotos)

//slice é pegar uma parte do Array - Um pedaço do Array
const algunsPilotos2 = pilotos.slice(1, 4) //O primeiro elemento é o índice, o índice 4 não vai entrar
console.log(algunsPilotos2)