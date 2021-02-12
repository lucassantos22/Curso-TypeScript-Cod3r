// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

console.log(echoMelhorado<string>('João').length);
console.log(echoMelhorado<number>(27)); // Substitui o 'T' por 'number'
console.log(echoMelhorado({nome: 'João', idade: 27}));

//Arrays
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);;
//avaliacoes.push('5.5'); Vai dar problema pois é string e o array aceita apenas numbers
console.log(avaliacoes)