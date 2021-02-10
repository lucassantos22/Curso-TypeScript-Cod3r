"use strict";
// Aula 1 (public e private existem em ts mas não em js)
class Data {
    constructor(dia, mes, ano = 1999) {
        // Público por padrão
        this.dia = 1;
        this.mes = 1;
        this.ano = 1970;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11);
aniversario.dia = 4;
console.log(aniversario);
//Aula 2 (Aula 1 de uma forma simplificada)
class DataEsperta {
    // Público por padrão
    constructor(dia = 1, mes = 1, ano = 1999) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11);
console.log(aniversarioEsperto);
// Desafio
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.aplicarDesconto();
    }
    aplicarDesconto() {
        this.preco = (this.preco * (100 - this.desconto)) / 100;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco},00 reais`;
    }
}
const produto1 = new Produto('Lápis', 10, 10);
console.log(produto1.preco);
const produto2 = new Produto('Borracha', 10);
console.log(produto2.preco);
console.log(produto2.resumo());
// Aula Modificadores de Acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima ? true : false;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford Ka', 'Ka', 185);
console.log(carro1.acelerar());
// Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40.acelerar());
//# sourceMappingURL=classes.js.map