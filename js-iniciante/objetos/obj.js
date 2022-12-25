// objeto é um conjunto de variaveis e funções
// as variaveis sao chamadas de propriedades e as funções, os métodos

var pessoa = {
  nome: 'giovani',
  idade: 20,
  profissao: 'designer',
  possuiFacul: true,
}

pessoa.nome; // 'giovani'
pessoa.possuiFacul;






//método = é uma propriedade que pode ser uma função
var quadrado ={
  lados: 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lados){
    console.log(this)  //this é o próprio objeto
    return this.lados * lados
  }
}

quadrado.lados;
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//abreaviação
// após os dois pontos, não precisa escrever function
var triangulo = {
  lados: 3,
  area(lado){
    return lado * 3
  },
  perimetro(lado) {
    return this.lado * lado
  }
}

console.log(triangulo.area(5));




//organizar código
// objetos server para organizr o código em partes reutilizáveis

Math.PI;
Math.random();

var pi = Math.PI;
console.log(pi); 
console.log(Math.random());

// objeto > método > propriedade