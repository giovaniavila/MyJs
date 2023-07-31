// O escopo de uma função se refere a funções declaradas dentro de variáveis, inacessíveis para funções
// fora do escopo

function mostraCarro(){
  var carro = 'fusca'
  console.log(carro)
}

mostraCarro(); // irá mostrar no console "carro"
console.log()// irá dar erro por estar fora do escopo da variável


// o escopo serve, sobretudo, para evitar conflito entre nomes de variáveis

var perfume = 'Chanel';
function mostraPerfume(){
  var frase = `Meu perfume é ${perfume}`
  console.log(frase)
}


// outro tipo de escopo
if(true){
  let carro = 'fusca'; // o let faz com que a variável não vaze do escopo
  console.log(carro)
}
console.log();


// chaves também criam blocos
{
  var idade =  '19';
  let carro = 'fusca';
  const ano = 1975;
}
console.log(idade);
console.log(); //let não vaza
console.log(); // const não vaza


// let em loops não vaza a variável
for(let i = 0; i <= 10; i++){
  console.log(`número ${i}`);
}


//diferença entre const e let 

//o const atribui o valor ao escopo e não deixa vazar, impede a redeclaração de variável e a 
//modificação do valor da variável, evitando assim bug no código
const mes = 'janeiro';
mes = 'dezembro' // erro, tentou modificar através de uma global

const data = {
  dia: 28,
  mes: 'dezembro',
  ano: 2018,
}

data.dia = 29; //funciona
data = 'janeiro'; //erra


// o let mantém o escopo do bloco, impede a redeclaração da variável, porém, permite a modificação do VALOR
// da variável
let ano;
ano = 2020;
ano ++;
console.log(ano)



