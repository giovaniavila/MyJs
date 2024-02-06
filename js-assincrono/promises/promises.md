# O que é?

Promise é uma função construtora que aceita a primeira opção se for true e rejeita se for false

- o que torna uma promisse especial é seu método no prototype chamado then()
  - o then é ativado quando a promise for resolvida, ele aguarda ser finalizada
- uma promisse só faz sentido a partir do momento em que utilizamos um codigo assincrono, porque seu poder esta no metodo resolve
- um then() retorna outra promise, que pode ser utilizada mais um método then(), podendo ocasionar um encadeamento de then
