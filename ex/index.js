const produto = {
  nome: 'Caneta bic preta',
  preco: 1.90,
  desconto: 0.05
}


function clone(objeto){
  //operador spread serve pra clonar objetos
  //sua instanciacao e com os 3 pontos (...)
  return { ...objeto}
}

const novoProduto = clone(produto)

novoProduto.nome = 'Buceta loirinha e cheirosa'

console.log('shwoing new product ', novoProduto)
