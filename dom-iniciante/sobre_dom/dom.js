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






