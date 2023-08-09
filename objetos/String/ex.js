// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacao = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let soma = 0;
let recebimento = 0;
transacao.forEach((item)=>{
    const numeroLimpo = +item.valor.replace('R$', ' ')
    if(item.descricao.includes('Taxa')){
        soma += numeroLimpo
    } else{
        recebimento += numeroLimpo;
    }
})
console.log(soma, recebimento);


  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

  const arrayTransportes = transportes.split(';');
  console.log(arrayTransportes);
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const substitui = html.split('span').join('a')
console.log(substitui)
  
  // Retorne o último caracter da frase
let frase = 'Melhor do ano!';
 
function removeCaractere(frase){
    return frase.replace(/[^a-zA-Z]/g, ' ')
}

let novaFrase = removeCaractere(frase);
let novaFrase1 = novaFrase.trim()
console.log(novaFrase1[novaFrase1.length - 1]);
 

  // Retorne o total de taxas
  const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  