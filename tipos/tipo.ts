//string
let nome :string = 'João';
// nome = 28 (Não pode pois 'nome' é do tipo string)

//numbers
let idade :number = 27;

//boolean
let isTrue: boolean = true;

//Nessa situação não é number e sim dinâmico como em 'js'
let minhaIdade;
minhaIdade = 21;

let meuNome: any;
meuNome = 'Lucas';

//array
let hobbies: Array<string> = ['Cozinhar', 'Correr'];
let oi: any[] = ['a', 1];

//tupla (array com um padrão e lógica)
let endereco: [string, number] =  ['Av Principal', 99];

//enum (estrutura com valores pré-definidos)
enum Cor {
    Cinza = 'cinza',
    Verde = 'verde',
    Azul = 'azul '
}

const s = {
    Cor
}

console.log(s.Cor.Azul )

let minhaCor: Cor = Cor.Verde;

//funções
function retornaMeuNome(nome: string): string{
    return nome;
}
retornaMeuNome('Lucas');

function digaOi(): void {
    console.log('Oi');
}

// tipo função
let teste: (a: number, b: number) => number

//objetos
let usuario: {nome: string, idade: number} = {
    nome: 'João',
    idade: 274
}

//Desafio
let funcionario: {supervisores: string[], baterPonto: (horario: number) => string} = {
    supervisores: ['João', 'Ricardo'],
    baterPonto(horario){
        return horario <=8 ? 'Ponto normal' : 'Fora do horário';
    }
}

console.log(funcionario.baterPonto(7));

//Alias
type Funcionario = {supervisores: string[], baterPonto: (horario: number) => string};

let segundoFuncionario: Funcionario = {
    supervisores: ['João', 'Ricardo'],
    baterPonto(horario){
        return horario <=8 ? 'Ponto normal' : 'Fora do horário';
    }
};

// Union Types
let nota: number | string = 10;
nota = '10';

// Checando tipos em runtime
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
} else {
    console.log('Não é um number');
}

//never (explicitar que função vai terminar com erro ou vai ficar em loop)
function falha(msg: string): never{
    while(true) {
        throw new Error(msg);  
    }
};

let altura: number | null = 12;
altura = null;