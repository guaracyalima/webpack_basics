//using class on javascript ES6
//pra exportar (deixar disponivel pra uso externo)
//deve-se exportar a classe pessoa
export default class Pessoa {

  constructor(nome){
    this.nome = nome
  }

  toString(){
    return `Pessoa: ${this.nome}`
  }

}

const pessoa = new Pessoa('Julia Gabriela')
console.log(pessoa.toString())
