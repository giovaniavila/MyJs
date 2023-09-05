const cep = fetch('https://viacep.com.br/ws/12223410/json/')

//json retorna como objeto
cep.then(r => r.json())
.then(body => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.logradouro
})