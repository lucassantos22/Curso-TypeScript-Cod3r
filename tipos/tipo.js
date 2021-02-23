"use strict";
//string
let nome = 'João';
// nome = 28 (Não pode pois 'nome' é do tipo string)
//numbers
let idade = 27;
//boolean
let isTrue = true;
//Nessa situação não é number e sim dinâmico como em 'js'
let minhaIdade;
minhaIdade = 21;
let meuNome;
meuNome = 'Lucas';
//array
let hobbies = ['Cozinhar', 'Correr'];
let oi = ['a', 1];
//tupla (array com um padrão e lógica)
let endereco = ['Av Principal', 99];
//enum (estrutura com valores pré-definidos)
var Cor;
(function (Cor) {
    Cor["Cinza"] = "cinza";
    Cor["Verde"] = "verde";
    Cor["Azul"] = "azul ";
})(Cor || (Cor = {}));
const s = {
    Cor
};
console.log(s.Cor.Azul);
let minhaCor = Cor.Verde;
//funções
function retornaMeuNome(nome) {
    return nome;
}
retornaMeuNome('Lucas');
function digaOi() {
    console.log('Oi');
}
// tipo função
let teste;
//objetos
let usuario = {
    nome: 'João',
    idade: 274
};
//Desafio
let funcionario = {
    supervisores: ['João', 'Ricardo'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.baterPonto(7));
let segundoFuncionario = {
    supervisores: ['João', 'Ricardo'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
// Union Types
let nota = 10;
nota = '10';
// Checando tipos em runtime
let valor = 30;
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
let altura = 12;
altura = null;
//# sourceMappingURL=tipo.js.map