// Conceito do ts
export namespace Areas {

    const PI = 3.14;

    export function areaCircunferencia(raio: number): number{
        return PI * Math.pow(raio, 2)
    }
    
    export function areaRetangulo(base: number, altura: number){
        return base * altura;
    }
}

const PI = 2.99 //Não da problema pois o outro 'PI' está dentro de namespace

console.log(Areas.areaCircunferencia(10));
console.log(Areas.areaRetangulo(10, 20))

namespace Geometria {
    export namespace Areas {

        const PI = 3.14;
    
        export function areaCircunferencia(raio: number): number{
            return PI * Math.pow(raio, 2)
        }
        
        export function areaRetangulo(base: number, altura: number){
            return base * altura;
        }
    }
}

console.log(Geometria.Areas.areaCircunferencia(1));