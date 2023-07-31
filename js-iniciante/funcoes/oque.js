/* Uma função é um bloco de código que pode ser executado e reutilizado


Parâmetro e argumento

Ao criar uma função voce pode definir parâmetros
Ao executar uma função, voce pode passar argumentos. */


function imc(peso,altura){   //peso e altura são parâmetros
  const imc = peso / (altura**2);
  return imc;
}
imc (80, 1.80) // 80 e 1.80 são argumentos
console.log(imc(80, 1.80))


