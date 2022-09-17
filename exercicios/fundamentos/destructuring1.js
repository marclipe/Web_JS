//Novo recurso do ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5, 
    endereco: {
        logradouro: 'Rua ABC', 
        numero: 1000
    } 
}

//Tire o objeto nome e pessoa
const {nome, idade } = pessoa
console.log(nome, idade)

//Outro jeito de usar a variável, vai dar o mesmo resultado 
const {nome: n, idade: i} = pessoa
console.log(n, i)

//bemHumorada - você pode atribuir um valor padrão se não vier nada
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)


const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)