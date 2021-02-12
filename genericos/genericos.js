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
//# sourceMappingURL=genericos.js.map