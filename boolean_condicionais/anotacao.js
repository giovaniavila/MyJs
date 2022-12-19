//condicionais basicas
var possuiGraducao = true;

if(!possuiGraducao) {
  console.log('possui graducao');
} else{
  console.log('nao possui graduacao');
}

// else-if
var possuiGraducao = true;
var possuiGraducao = false;

if(possuiGraducao) {
  console.log('possui graduacao e doutorado');
} else if (possuiGraducao){
  console.log('Possui graduacao, mas nao possui doutodrado');
} else{
  console.log('nao possui graduação');
}


var nome = '';
if(nome){
  console.log(nome);
} else{
  console.log('nome não existe');
}

//utilizar três "="
var x = 'Gato';
console.log(x === 'Gato');



//operador &&, tabela proposicional ^
if (('') && (5+5)) {
  console.log('verdadeiro')
} else{
  console.log('falso');
}



// operador ou, tabela proposicional ∨

true || true; //true
true || false; // true
false || true // true
'gato' || 'cão'; // 'gato'
(5-5) || (5+5); // 10
'gato' || false; //gato
(5 >= 5) || (3 < 6); // true

//retorna o primeiro valor true
var condicional = ((5-5) || (5+5) || (10-2));
console.log(condicional);


//switch serve para verifica os possiveis valores de uma mesma variavel
var corFavorita = '';
switch(corFavorita) {
  case 'azul':
    console.log('olhe para o céu')
    break;
  case 'vermelho':
    console.log('olhe para as rosas')
    break;
  case 'amarelo':
    console.log('olhe para o sol')
    break;
  default:
    console.log('feche os olhos')
}








