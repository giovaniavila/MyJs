const promessa = new Promise((resolve, reject) => {
  resolve("etapa 1");
});

promessa
  .then((primeiraEtapa) => {
    console.log(primeiraEtapa);
    const segundaEtapa = "etapa 2";
    return segundaEtapa;
  })
  .then((segundaEtapa) => {
    console.log(segundaEtapa);
    const terceiraEtapa = "etapa 3";
    return terceiraEtapa;
  })
  .then((terceiraEtapa) => {
    console.log(terceiraEtapa);
  });

////////////////////////
const novaPromessa = new Promise((resolve, reject) => {
  resolve({ nome: "giovani", idade: "21" });
});

novaPromessa
  .then((dados) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dados.profissao = "programador";
        resolve(dados);
      }, 1000);
    });
  })
  .then((dadosAtualizados) => console.log(dadosAtualizados));
