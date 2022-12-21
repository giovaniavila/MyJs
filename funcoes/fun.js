function areaQuadrado(lado){
  return lado * lado;
}

areaQuadrado(2); //executa a function
console.log(areaQuadrado(4)); //apresenta a function no console
console.log(areaQuadrado(5));



function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);
console.log(pi());



function imc(peso,altura){   //peso e altura são parâmetros
  const imc = peso / (altura**2);
  return imc;
}

imc (80, 1.80) // 80 e 1.80 são argumentos
console.log(imc(80, 1.80))




function corFavorita(cor){
  if (cor=='azul'){
    return 'você gosta do céu'
  } else if(cor=='verde'){
    return 'voce gosta da natureza'
  } else {
    return 'voce não gosta de nada'
  }
}

corFavorita();
console.log(corFavorita('azul'));
console.log(corFavorita());



addEventListener('click', function(){
  console.log('clicou');
});
// a função possui dois argumento
// primeiro é a string
// segundo é a function anônima


//outra forma de fazer, definindo a função primeiro
function mostraConsole(){
  console.log('oi')
}

addEventListener('click', mostraConsole);