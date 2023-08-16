const dados = [new String('tipo 1'), ['carro', 'porta', {cor: 'azul', preco: 2000}]];
console.log(dados[1][2].cor)

//array from
const selecionaLi = document.querySelectorAll('li');
const arrayLi = Array.from(selecionaLi);
const obj = {
    0: 'giovani',
    1: 'avila',
    2: 'teste',
    length: 3
}

const objArray = Array.from(obj)

console.log(selecionaLi)
console.log(arrayLi)
console.log(objArray)

//isArray()
console.log(Array.isArray(selecionaLi))
console.log(Array.isArray(arrayLi))



//métodos modificadores
// Array.sort();

const instrumentos = ['guitarra', 'violao', 'violina', 'flauta']
console.log(instrumentos.sort())

const numeros = [23,54,6,12,35,89]
console.log(numeros.sort()) //organiza de forma crescente de acordo com os primeiros caracteres de cada dígito

//Array.push()
const carros = ['Honda', 'hb20', 'ferrari'];
carros.push('camaro')
console.log(carros)

//shift e pop
//shift retorna o primeiro elemento pop retorna o último item da array
const livros = ['a', 'b', 'c'].shift();
console.log(livros)

const materias = ['matematica', 'literatura', 'quimica', 'geografia'].pop();
console.log(materias)

//Array.reverse() - reverte a ordem da array de trás para a frente

//Array.splice();
const arrayCarro = ['Honda', 'hb20', 'ferrari'];
arrayCarro.splice(1,1, 'camaro')
console.log(arrayCarro)
