//promise é um função construtora que executa o primeiro argumentos e ele for válido e rejeito o segundo se for inválido
const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao){
        setTimeout(() => {
            resolve({nome: 'giovani', idade: '20'});
        },1000)
    } else{
        reject()
    }
})

//then serve para realizar uma funcao depois que a condicao é dada por verdadeira na promise
promessa.then( resolucao =>  console.log(resolucao));

