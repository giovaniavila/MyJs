// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

// Crie duas expressões que retornem NaN
var idade = 'isso é uma string'/2;
console.log(idade)

// Somar a string '200' com o número 50, retorna o valor 20050
var s = '200' + 50; 
console.log(s)

var x = '200';
var y = 50;
console.log(`${x}+${y}`)

var k = '200'; //transforma string em numero
var g = 50;
console.log(+k + g)

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(incremento++);
console.log(incremento)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero = '80';
var unidade = 'kg';
var peso = `${+numero}` // '80kg'
var pesoPorDois = (peso / 2) + unidade; // NaN (Not a Number)
console.log(pesoPorDois)


var subtrai = '200';
var subtrai2 = 50;
console.log(subtrai - subtrai2);

var multiplica = '200';
var multiplica2 = 2;
console.log(multiplica * multiplica2)

var soma = '200';
var soma2 = 50;
console.log(soma + soma2)

var incremento = 5;
console.log(incremento++);
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2)
console.log(incremento);



