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

//Tipo Função Genérico
const chamarEcho: <T>(data: T) => T = echoMelhorado;
console.log(chamarEcho<string>('Oi'));

//Classe com Generics
class OperacaoBinaria <T, R> {
    
    constructor(public operando1: T, public operando2:T){

    }

    //executar(): R {
        //return (this.operando1 + this.operando2).toString();
    //}

}

//console.log(new OperacaoBinaria<number, string>(1, 2).executar());