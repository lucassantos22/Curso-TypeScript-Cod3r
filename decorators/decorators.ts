function logarClasse(classe: Function) {
    console.log(classe)
}

function vazio(_: Function) {

}

// Factory
function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : vazio
}

//@logarClasse
@imprimivel
@logarClasseSe(true)
class EletroDomestico {
    constructor(){
        console.log('Hello Word')
    }
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro:any = new EletroDomestico
eletro.imprimir();

// Desafio Decorator perfilAdmin

function perfilAdmin (constructor: Function) {
    if (!usuarioLogado.admin) {
        constructor.prototype.critico = function () {
            console.log('O perfil não é administrador')
        }
        // throw new Error ('Perfil não é administrador!')
    } else {
        constructor.prototype.critico = function () {
            console.log('Algo crítico foi alterado!')
        }
    }
}

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

@perfilAdmin
class MudancaAdministrativa {
    
}
 
const mudancaAdministrativa: any = new MudancaAdministrativa
mudancaAdministrativa.critico()