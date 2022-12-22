function imc2(peso, altura){
  const imc2 = peso / (altura**2)
  console.log(imc2)
}

// se não colocar return, aparecerá undefined 
imc2(80, 1.80);
console.log(imc2(80, 1.80));

// uma função pode retornar qualquer tipo de dado
function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe sua idade'
  } else if(idade >= 60){
    return true
  } else{
    return false
  }
}


//escopo
function precisoVisitar(paisVisitado){
  var totalPaises = 193; //não será visível no console se  a variável estiver dentro da função
  return `ainda faltam ${totalPaises-paisVisitado} países`
}




var profissao = 'programador';

function dados(){
  var nome = 'Giovani';
  var idade = 20;
  function outrosDados(){
    var endereco = 'São Paulo';
    var idade = 21;
    return `${nome}, ${endereco}, ${idade}, ${profissao}`
  }
  return outrosDados();
}

console.log(dados());
console.log(outrosDados()); // o mesmo ocorre com funções criadas dentro de outras funções, não aparece no console










