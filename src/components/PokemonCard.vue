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
            <img v-if="pokemon.captured" src="/imagens/Poke_Ball_Sprite 1.png" alt="" class="Captured">
        
            <div class="pokeCard center">
                <img :src="`/imagens/${pokemon.image}`" alt="">
                <p class="pokeNumber"> {{ pokemon.number}}</p>

            </div>
            <p class="pokeName"> {{ pokemon.name }}</p>
            <div v-if="pokemon.type && pokemon.type.length > 1" id="double-type" > 
                <p class="pokeType pokeType-wrapper center normal" id="double-type"> {{ pokemon.type[0] }} </p> 
                <p class="pokeType pokeType-wrapper center normal"> {{ pokemon.type[1] }} </p> 
            </div>
            <div v-else class="pokeType-wrapper center normal" id="single-type" > 
                <p class="pokeType"> {{ pokemon.type[0] }} </p> 
            </div>
            
        </div>
    </article>
</template>

    
<style scoped>

.Captured {
    position: relative;
    top: 0.3rem;
    left: 6.5rem;
}

#double-type {
    margin-right: 0.2rem;
   
}

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
}

#single-type {
    margin-left: 1.8em;
}
</style>