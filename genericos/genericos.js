"use strict";
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27)); // Substitui o 'T' por 'number'
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
//Arrays
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
;
//avaliacoes.push('5.5'); Vai dar problema pois é string e o array aceita apenas numbers
console.log(avaliacoes);
//Tipo Função Genérico
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Oi'));
//Classe com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
//console.log(new OperacaoBinaria<number, string>(1, 2).executar());
//# sourceMappingURL=genericos.js.map