interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar?(sobrenome: string): void
}

function saudarComOla(pessoa: Humano): void{
    console.log('Olá', pessoa.nome);
}

function mudarNome(pessoa: Humano): void{
    pessoa.nome = 'Joana';
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Olá', sobrenome);
    }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({nome: 'Jonas', idade: 27, xyz: true})

// Usando Classes...
class Cliente implements Humano {

    saudar(sobrenome: string): void{
        console.log('Olá!', sobrenome);
    }

    constructor(public nome: string){
        
    }

}

const meuCliente = new Cliente('Lucas')
meuCliente.saudar('Santos');

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function(k: number, j: number): number{
    return Math.pow(k, j);
    // or return k ** j;
}

// Herança
interface A{
    a(): void;
}

interface B{
    b(): void;
}

interface ABC extends A, B {
    c(): void;
}

class Teste implements ABC {
    a(){

    }
    b(){

    }
    c(){
        
    }
}

function testee(b: B){
    
}

testee(new Teste);

abstract class AbstractABD implements A, B {
    a(): void {};
    b(): void {};
    abstract d(): void;
}

// Extendendo Objetos com Interface

interface Object {
    log(): void;
}

const l = {}
l.log();