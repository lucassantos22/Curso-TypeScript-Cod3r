"use strict";
//string
var nome = 'João';
// nome = 28 (Não pode pois 'nome' é do tipo string)
//numbers
var idade = 27;
//boolean
var isTrue = true;
//Nessa situação não é number e sim dinâmico como em 'js'
var minhaIdade;
minhaIdade = 21;
var meuNome;
meuNome = 'Lucas';
//array
var hobbies = ['Cozinhar', 'Correr'];
var oi = ['a', 1];
//tupla (array com um padrão e lógica)
var endereco = ['Av Principal', 99];
//enum (estrutura com valores pré-definidos)
var Cor;
(function (Cor) {
    Cor["Cinza"] = "cinza";
    Cor["Verde"] = "verde";
    Cor["Azul"] = "azul ";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
//funções
function retornaMeuNome(nome) {
    return nome;
}
retornaMeuNome('Lucas');
function digaOi() {
    console.log('Oi');
}
// tipo função
var teste;
//objetos
var usuario = {
    nome: 'João',
    idade: 274
};
//Desafio
var funcionario = {
    supervisores: ['João', 'Ricardo'],
    baterPonto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.baterPonto(7));
var segundoFuncionario = {
    supervisores: ['João', 'Ricardo'],
    baterPonto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
// Union Types
var nota = 10;
nota = '10';
// Checando tipos em runtime
var valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
}
else {
    console.log('Não é um number');
}
//never (explicitar que função vai terminar com erro ou vai ficar em loop)
function falha(msg) {
    while (true) {
        throw new Error(msg);
    }
}
;
var altura = 12;
altura = null;
//# sourceMappingURL=tipo.js.map