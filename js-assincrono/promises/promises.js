//promise é uma funcao construtora que aceita a primeira opcao se for true, e rejeita a segunda se for false
const promise = new Promise((resolve, reject) => {
  const verdade = true;
  verdade === true
    ? setTimeout((resolve) => {
        console.log({ nome: "giovani", idade: "21" });
      }, 1000)
    : reject(Error("um erro ocorreu na promise"));
});

// o que torna uma promisse especial é seu método no prototype chamado then()
// só é ativado quando a promise for resolvida, ele aguarda ser finalizada
// o then tem acesso as propriedades do objeto retornado na funcao promise
// uma promisse só faz sentido a partir do momento em que utilizamos um codigo assincrono, porque seu poder esta no metodo resolve
// um then() retorna outra promise, que pode ser utilizada mais um método then(), podendo ocasionar um encadeamento de then

promise.then((resolve) => {
  console.log(resolve);
});

console.log(promise);
