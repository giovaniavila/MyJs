// objeto é um conjunto de variaveis e funções
// as variaveis sao chamadas de propriedades e as funções são os métodos

var pessoa = {
  nome: 'giovani',
  idade: 20,
  profissao: 'Analista de sistemas',
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
var pessoa = {
  nome: 'giovani',
  idade: 20,
  possuiFaculdade: true,
}
pessoa.nome;
pessoa.idade
console.log(pessoa);







// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome:'giovani',
  idade: 20,
  sobrenome: 'avila'
}
console.log(dadosPessoais);



// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto  = function(){
  return `${this.nome} ${this.sobrenome}`
}


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro ={
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'late'
    } else{
      return 'não late'
    }
  }
}
cachorro.raça = 'labrador';





