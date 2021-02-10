"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Areas = void 0;
// Conceito do ts
var Areas;
(function (Areas) {
    const PI = 3.14;
    function areaCircunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCircunferencia = areaCircunferencia;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    Areas.areaRetangulo = areaRetangulo;
})(Areas = exports.Areas || (exports.Areas = {}));
const PI = 2.99; //Não da problema pois o outro 'PI' está dentro de namespace
console.log(Areas.areaCircunferencia(10));
console.log(Areas.areaRetangulo(10, 20));
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function areaCircunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.areaCircunferencia = areaCircunferencia;
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Areas.areaRetangulo = areaRetangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Areas.areaCircunferencia(1));
//# sourceMappingURL=namespaces.js.map