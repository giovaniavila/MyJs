function pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const eu = new pessoa('Giovani', 20);

//adiciona o método andar (que é uma função) no objeto pessoa, é utilizado para criar um novo objeto com um método específico
pessoa.prototype.andar = function(){
   return this.nome + ' '  + "andou";
}

pessoa.prototype.nadar = function(){
    return this.nome + ' '  + "nadou";
 }



 //prototype sempre está na função, ela serve para retornar o objeto
console.log(pessoa.prototype); 
console.log(eu);





//prototype 2
// para saber os métodos, utiliza-se String.prototype no console, ou qualquer outra função construtora que quiser (Number, Boolean)
const pais = "Brasil";
console.log(pais.charAt(0));

const cidade = new String('Rio');
console.log(cidade.toUpperCase());



/* const listaAnimais = ['cachorro', 'gato', 'cavalo'];
console.log(listaAnimais.length); */

//transformar a li em array direto
const lista = document.querySelectorAll('li');
const listaAnimais = Array.from(lista);
console.log(listaAnimais);