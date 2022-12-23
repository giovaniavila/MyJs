// Crie uma função para verificar se um valor é Truthy
function valor(verifica){
  return !!verifica;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
  var perimetro = (lado+lado+lado+lado);
  return perimetro
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}


// Crie uma função que verifica se um número é par

function par(numero){
  if(numero % 2 === 0){
    return 'par'
  } else if(numero % 2 !== 0){
    return 'ímpar'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(tipo){
  var dado = (typeof tipo)
  return dado
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
addEventListener('scroll', function(){
  console.log('Giovani Avila');
});


