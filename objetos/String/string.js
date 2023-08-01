const comida = 'pizza';
const agua = new String('agua');
const frase = 'a melhor linguagem é'


//length
console.log(comida.length);
console.log(agua.length);
console.log(frase[frase.length - 1])

console.log(comida[0])
console.log(agua[0])


//charAT
const linguagem = ' Javascript '

console.log(linguagem.charAt(0));
console.log(linguagem.charAt(2));
console.log(linguagem.charAt(linguagem.length - 1));


//concat
const fraseCompleta = frase.concat(linguagem, "!!")
console.log(fraseCompleta);


//includes
const fruta = 'banana';
const listaFrutas = 'melancia, banana, laranja'

console.log(listaFrutas.includes(fruta)) //true
console.log(fruta.includes(listaFrutas)) //false


//endsWith e StartsWith
console.log(fruta.startsWith('ba'));
console.log(fruta.endsWith('na'));


//slice
const transacao1 = 'Depósito do cliente'
const transacao2 = 'Depósito de fornecedor'
const transacao3 = 'Taxa de camisas'

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0,-2));
console.log(transacao3.slice(4));


//indexOF e lastIndexOF
console.log(transacao1.indexOf('D'));
console.log(transacao2.lastIndexOf('r'));


//padStart e Padend
const listaPrecos = ['99', '199', '12000']

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
})


//repeat
const frase1 = 'ta';
console.log(frase1.repeat(5));


//replace
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ')
console.log(listaItens);

let preco2  = '1200,43';
preco2 = preco2.replace(',', '.')
console.log(preco2)


//split
console.log(listaItens.split(', '))


//trimStart e trimEnd
const valor = '  giovani  ';
console.log(valor.trim());