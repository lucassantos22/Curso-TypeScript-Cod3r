<template>
    <div>
        <h1>Contador</h1>
        <h2>{{valor}}</h2>
        <button @click='setValor(-1)'>Decremento</button>
        <button @click='setValor(+1)'>Incremento</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(){
        return{
            valor: this.valorInicial || 0
        }
    },
    props:{
        valorInicial: Number
    },
    methods: {
        setValor(delta: number){
            this.valor += delta;
        }
    }
})
</script>

<style>

</style>
