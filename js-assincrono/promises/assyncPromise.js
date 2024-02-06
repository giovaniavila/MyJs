const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolvido");
  }, 1000);
});

promessa.then((resolve) => {
    console.log(resolve)
})