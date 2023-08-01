// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function pessoas(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}


pessoas.prototype.retornar = function(){
    return this.nome + ' ' + this.sobrenome
}

const gio  = new pessoas('Giovani', 'Avila', 20)



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
NodeList.prototype
HTMLAllCollection.prototype
document.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;  //li.constructor.name
li.click; // li.click.constructor.name
li.innerText; //
li.value; //
li.hidden; //
li.offsetLeft; //
li.click(); //

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
