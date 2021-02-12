"use strict";
function saudarComOla(pessoa) {
    console.log('Olá', pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá', sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Jonas', idade: 27, xyz: true });
// Usando Classes...
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
    saudar(sobrenome) {
        console.log('Olá!', sobrenome);
    }
}
const meuCliente = new Cliente('Lucas');
meuCliente.saudar('Santos');
let potencia;
potencia = function (k, j) {
    return Math.pow(k, j);
    // or return k ** j;
};
class Teste {
    a() {
    }
    b() {
    }
    c() {
    }
}
function testee(b) {
}
testee(new Teste);
class AbstractABD {
    a() { }
    ;
    b() { }
    ;
}
const l = {};
l.log();
//# sourceMappingURL=interfaces.js.map