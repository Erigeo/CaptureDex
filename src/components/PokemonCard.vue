<script lang="ts">
import type { PropType } from 'vue';
import type IPokemonData from '@/interface/IPokemonData'

export default {
    props : {
        pokemon: { type: Object as PropType<IPokemonData>, required: true}
    }
}
</script>

<template>
    <article class="center">

        <div>
            <div class="pokeCard center">
                <img :src="`/imagens/${pokemon.image}`" alt="">
                <p class="pokeNumber"> {{ pokemon.number}}</p>

            </div>
            <p class="pokeName"> {{ pokemon.name }}</p>
            <div class="pokeType-wrapper center normal" id="single-type">
                <p class="pokeType"> {{ pokemon.type }}</p> 
            </div>
        </div>

        
    </article>
</template>

    
<style scoped>
.imagem {
    width: 3.5rem;
    position: absolute;
    margin-top: 10rem;
}
.pokeNumber {
    position: absolute;
    top: 5rem;
    font-size: 0.6em;
}

article {
    background-color: #F1EDED;
    min-width: 10rem;
    min-height: 12rem;
    width: 10rem;
    height: 12rem;
    border-radius: 1rem;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pokeCard {
    background-color: #D9D9D9;
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    margin: auto;
    position: relative;
}




.pokeName {
    color: black;
    text-align: center;
    position: relative;
}

.pokeType-wrapper {
    display: inline-flex;
    text-align: center;
    font-size: 0.6875rem;

    border-radius: 0.3rem;

    min-width: 3.6rem;
    min-height: 0.875rem;

    width: 3.6rem;
    height: 0.9rem;
}

.normal {
    background-color: #A8A77A;
    font-style: blue;
}

#single-type {
    margin-left: 1.8em;
}
</style>