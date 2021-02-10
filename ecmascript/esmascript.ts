//let & const
/*console.log(seraQuePode);*/
var seraQuePode = 'Sim'; // log vai dar 'undefined' mas não terá erro, let não tem hoisting.

let estaFrio = true;
if(estaFrio) {
    var acao = 'Colocar o casaco!';
}

/*console.log(acao);*/

//arrow function
const somar = function(n1: number, n2: number): number{
    return n1 + n2;
}

const subtrair = (n1: number, n2: number): number=> n1 - n2;

const saudacao = ()=> console.log('Olá!');
saudacao();

const falarCom = (pessoa: string) => console.log('Olá', pessoa);

//this
function normalComThis(){
    //console.log(this);
}

normalComThis.bind('Acb');
normalComThis();

//const arrowComThis = ()=> console.log(this); //Pega o this do pai/da linha anterior (vai imprimir window nesse caso);
//arrowComThis();

//parâmetros padrão
function paramPadrao(param: number = 3): void{
    console.log(param);
}

//Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); //Pois a função aceita numbers e não um array inteiro;

const turmaA: string[] = ['João', 'Maria', 'Fernando'];
const turmaB: string[] = ['Fernando', ...turmaA]

function retornaArray(...array: number[]): number[]{
    return array;
}

const arrayExemplo = retornaArray(1,2,3,4)

//Rest & Spread (Tupla)
const tupla: [number, string, boolean] =[1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla);