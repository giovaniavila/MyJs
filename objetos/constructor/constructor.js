function vendaCasa(precoInicial){
    const taxa = 0.3;
    const precoFinal = precoInicial + (taxa * precoInicial);
    console.log(precoFinal);
}

const primeiraCasa = new vendaCasa(1000)



/* const dom = {
    seletor: 'li',
    element(){
       return document.querySelector(this.seletor);
    },
    ativar(){
        const elementoSelecionado = this.element();
        elementoSelecionado.classList.toggle('ativar');
    }
}
 */


function dom(seletor){
    this.seletor = seletor;
}