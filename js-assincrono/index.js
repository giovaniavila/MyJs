function executarAssincrona(callback) {
  setTimeout(function () {
    console.log("essa funcao é executada depois de 2 segundos pq é assinc ");
    callback();
  }, 2000); // dois segundos
}

function minhaCallback() {
  console.log("essa vem logo depois porque espera o console log ");
}

executarAssincrona(minhaCallback);

console.log('operacao principal continua ocorrendo enquanto a assincrona é executada');
