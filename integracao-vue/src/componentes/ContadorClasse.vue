<template>
    <div>
        <h1>Contador Classe</h1>
        <h2>{{valor}}</h2>
        <h3>O valor é: {{getparOuImpar()}}</h3>
        <h3>O valor é: {{parOuImpar}}</h3>
        <button @click='setValor(-1)'>Decremento</button>
        <button @click='setValor(+1)'>Incremento</button>
    </div>
</template>

<script lang="js">

    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component
    export default class ContadorClasse extends Vue{

        @Prop(Number) private readonly valorInicial!: number;

        private valor = this.valorInicial;

        public setValor(delta: number): void {
            this.valor += delta;
        }

        public getparOuImpar(): string { // Propriedade computada
            return this.valor % 2 === 0 ? 'Par' : 'Impar'
        }

        public get parOuImpar(): string { // Propriedade computada
            return this.valor % 2 === 0 ? 'Par' : 'Impar'
        }

    }

</script>

<style>

</style>