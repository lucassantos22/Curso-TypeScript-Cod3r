//1) Traduzir para typescript
const dobro = function(valor: number): number {
    return valor * 2
}
console.log(dobro(10));


//2) Tentar melhorar
const dizerOla = function (nome: string = 'Pessoa'): void {
    console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")

//3) Imprimir menor valor
const nums1: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums1));

//4) Adicione os elementos de nums em array
const nums2: number[] = [-3, 33, 38, 5]
const array: number[] = [55, 20, ...nums2]
console.log(array)

interface Profissional {
    primeiroNome: string, 
    experiencia: number
}

//5) Simplifique os trechos de código abaixo utilizando o operador Destructuring
const [nota1, nota2, nota3] = [8.5, 6.3, 9.4]
console.log(nota1, nota2, nota3)
const cientista: Profissional = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome, experiencia} = cientista;
console.log(primeiroNome, experiencia)