window.alert('isso é um alerta');

const h1Selecionado = document.querySelector('h1');

if(h1Selecionado === 'h1'){
  console.log('ok')
} else {
  console.log('not ok')
}


const h1Classes = h1Selecionado.classList;
function callback1(){
  console.log('voce clicou em', h1Selecionado.innerText)
}
h1Selecionado.addEventListener('click', callback1);

// ou pode escrever dentro no add event listenter atráves de uma função anônima
/*
   h1Selecionado.addEventListener('click',function(){
    console.log('voce clicou em', h1Selecionado.innertext)
   })
*/ 



//exercicio
// retorn a url da página atual utilizando o metódo windows
const localiza= window.location;
console.log(localiza);

// selecione o primeiro elemento da página que contém o elemento ativo 
const elementoAtivo = document.querySelectorAll('.ativo');
console.log(elementoAtivo);

// retorne a linguagem do navegador 
const navegar = window.navigator.language;
console.log(navegar);

if(navegar == 'pt-br'){
  console.log('seu navegador está em português')
} else{
  console.log('seu navegador não está em português')
}

//retorne a largua da  janela
console.log(window.innerWidth);



