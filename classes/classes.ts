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