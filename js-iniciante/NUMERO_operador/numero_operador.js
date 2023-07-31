/* No JS, eu posso subtrair e multiplicar uma um número de uma string, ex: */
var idade = '100' - 50;
Console.log(idade)
            return 50

var idade = '100' * 2;
Console.log(idade)
            return 200


/* Não se aplica para soma e divisão, ex: */
var idade = '100' + 50;
Console.log(idade)
            return 10050




/* Operadores Unários */
var incremento = 5;
Console.log(incremento++);  return 5
Console.log(incremento);      return 6

var incremento2 = 5;
Console.log(++incremento2); return 6
Console.log(incremento2);     return 6


/* É possível também transformar uma string em um número */
var s = '28'  + 5;
Console.log(s)
        return 285 

var s = '28';
Console.log(+s +5)
        return 33 


     
        
/* Boolean e Condicionais */
var possuiGraduacao = True;

If(possuiGraduacao){
    console.log('possuiGraduacao')
} else{
    console.log('nao possui graducao')
}


//Truthy and Falsy
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ''


Para invertar o operador lógico
//Truthy and Falsy
// Falsy
if(!false), -> true
if(!0), // ou -0 -> true
if(!NaN), -> true
if(!null),
if(!undefined),
if(!!'') // ou "" ou ''



O == faz uma comparação não tão estrita
O === faz uma comparação estrita

10 == '10';  // true
10 == 10;  //true
10 === '10';  // false
10 != 5 ;  // true
10 != '10' ; //false
10 !== '10'; //true 


//valor proposicional v
//pega o primeiro valor true

true || true; //true
true || false; // true
false || true // true
'gato' || 'cão'; // 'gato'
(5-5) || (5+5); //10
'gato' || false; //gato
(5 >= 5) || (3 < 6); // true

-- pega o primeiro valor true

var condicional = ((5-5) || (5+5) || (10-2));
console.log(condicional);
                  isso retorna 10, (5+5) a primeira verdadeira

SWITCH
.verifica se uma mesma variavel corresponde a diferentes valores utilizando o case