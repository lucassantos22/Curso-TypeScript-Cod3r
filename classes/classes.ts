// Aula 1 (public e private existem em ts mas não em js)
class Data {

    // Público por padrão

    dia: number = 1;
    mes: number = 1;
    ano: number = 1970;

    constructor(dia: number, mes: number, ano: number = 1999){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    
}

const aniversario = new Data(3, 11);
aniversario.dia = 4
console.log(aniversario)

//Aula 2 (Aula 1 de uma forma simplificada)
class DataEsperta {

    // Público por padrão

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1999){

    }
    
}

const aniversarioEsperto = new DataEsperta(3, 11);
console.log(aniversarioEsperto)

// Desafio

class Produto{

    constructor(public nome: string, public preco: number, public desconto: number = 0){
        this.aplicarDesconto();
    }

    private aplicarDesconto(): void{
        this.preco = (this.preco * (100 - this.desconto))/ 100;
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.preco},00 reais`
    }

}

const produto1 = new Produto('Lápis', 10, 10);
console.log(produto1.preco);
const produto2 = new Produto('Borracha', 10);
console.log(produto2.preco);
console.log(produto2.resumo());

// Aula Modificadores de Acesso

class Carro {

    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number=200) {
        
    }

    protected alterarVelocidade(delta: number): number{ // Protected -> Visível pra própria classe e classes que herdam
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima ? true : false;
        if (velocidadeValida){
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual;
    }

    public acelerar(): number{
        return this.alterarVelocidade(5);
    }

    public frear(): number{
        return this.alterarVelocidade(-5);
    }

}

const carro1 = new Carro('Ford Ka', 'Ka', 185);
console.log(carro1.acelerar());

// Herança
class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar(): number{
        return this.alterarVelocidade(20);
    }

    public frear(): number{
        return this.alterarVelocidade(-15);
    }

}

const f40 = new Ferrari('F40', 324)
console.log(f40.acelerar());

// Getters & Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number{
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120){
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);

// Atributos e métodos estáticos; (O que é estático está associado à classe e não a instância)

class Matematica {

    static PI = 3.1416;

    static areaCirc(raio: number): number {
        return this.PI * raio * raio;
    }

}

console.log(Matematica.areaCirc(2));

// Classes abstratas (Não podem ser instanciadas, não existem em js mas sim em typescript)
abstract class x {

    abstract y(a: number): number; // Métodos abstratados não tem implementação

    w(b: number): void {
        console.log(b);
    }

}

class x2 {

    y(a: number): number {
        return a;
    }

    w(b: number): void {
        console.log(b);
    }

}

class Unico {

    private static instance: Unico = new Unico;

    private constructor() {

    }

    static getInstance() {
        return Unico.instance;
    }

    agora() {
        return new Date
    }
    
}

console.log(Unico.getInstance().agora());

// Atributos somente leitura (Não existe no js, só no ts)
class Aviao {

    public readonly modelo: string;
    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo;
    }

}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'; Não deixa pois o atributo é readonly, depois de uma vez setado não dá pra modificar;
// turboHelice.prefixo = 'PT-DEF'; Não deixa pois o atributo é readonly, depois de uma vez setado não dá pra modificar;