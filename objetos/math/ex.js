// Retorne um número aleatório
// entre 1050 e 2000
numero = Math.round(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numero)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'; //array de strings deve-se transformar em array
const arrayNumero = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumero)
console.log(Math.max(numeroMaximo))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
