// Exercício 1 - Classe (substituir essa forma por classe)
class Moto {

    public velocidade: number = 0

    constructor(public nome: string){
        
    }

    buzinar(): void {
        console.log('Toooooooooot!')
    }
 
    acelerar(delta: number): void {
        this.velocidade += delta;
    }
}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
abstract class Objeto2D {

    public constructor(protected base: number, protected altura: number){

    }

    abstract area(): number;

}
class Retangulo extends Objeto2D {

    public constructor(protected base: number, protected altura: number){
        super(base, altura);
    }

    area(){
        return this.base * this.altura
    }

}

const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

// Exercício 3 - Getters & Setters

class Estagiario {
    
    private _primeiroNome = ''

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(nome: string) {
        this._primeiroNome = nome;
    }

}
 
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)