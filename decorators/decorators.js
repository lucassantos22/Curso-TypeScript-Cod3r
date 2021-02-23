"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(classe) {
    console.log(classe);
}
function vazio(_) {
}
// Factory
function logarClasseSe(valor) {
    return valor ? logarClasse : vazio;
}
//@logarClasse
let EletroDomestico = class EletroDomestico {
    constructor() {
        console.log('Hello Word');
    }
};
EletroDomestico = __decorate([
    imprimivel,
    logarClasseSe(true)
], EletroDomestico);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new EletroDomestico;
eletro.imprimir();
// Desafio Decorator perfilAdmin
function perfilAdmin(constructor) {
    if (!usuarioLogado.admin) {
        constructor.prototype.critico = function () {
            console.log('O perfil não é administrador');
        };
        // throw new Error ('Perfil não é administrador!')
    }
    else {
        constructor.prototype.critico = function () {
            console.log('Algo crítico foi alterado!');
        };
    }
}
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
let MudancaAdministrativa = class MudancaAdministrativa {
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
const mudancaAdministrativa = new MudancaAdministrativa;
mudancaAdministrativa.critico();
//# sourceMappingURL=decorators.js.map