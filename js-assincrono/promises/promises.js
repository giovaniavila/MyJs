const promise = new Promise((resolve, reject) => {
  const verdade = true;
  verdade === true
    ? setTimeout((resolve) => {
        console.log({ nome: "giovani", idade: "21" });
      }, 1000)
    : reject(Error("um erro ocorreu na promise"));
});

promise.then((resolve) => {
  console.log(resolve);
});

console.log(promise);
