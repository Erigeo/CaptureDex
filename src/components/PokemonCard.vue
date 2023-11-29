<script lang="ts">
import type { PropType } from 'vue';
import type IPokemonData from '@/interface/IPokemonData'

export default {
    props: {
        pokemon: { type: Object as PropType<IPokemonData>, required: true }
    },
    methods: {
        toggleCaptured() {
            this.pokemon.captured = !this.pokemon.captured;
        }
    }
}
</script>

<template>
    <article class="center">


        <div class="card-wrapper">
            <img v-on:click="toggleCaptured" v-if="pokemon.captured" src="/imagens/pokeball.png" alt="" class="captured">
            <img v-else v-on:click="toggleCaptured" src="/imagens/pokeball_gray.png" alt="" class="captured" />
            <div class="pokeCard center">
                <img :src="`/imagens/${pokemon.image}`" alt="">
                <p class="pokeNumber"> {{ pokemon.number }}</p>

            </div>
            <p class="pokeName"> {{ pokemon.name }}</p>
            <div v-if="pokemon.type && pokemon.type.length > 1">
                <span :class="pokemon.type[0].toLowerCase()" class=" pokeType-wrapper center" id="double-type"> {{ pokemon.type[0] }} </span>
                <span :class="pokemon.type[1].toLowerCase()" class=" pokeType-wrapper center" id="double-type"> {{ pokemon.type[1] }} </span>
            </div>
            <div v-else>
                <span :class="pokemon.type[0].toLowerCase()" class="pokeType-wrapper center" id="single-type"> {{ pokemon.type[0] }} </span>
            </div>

        </div>
    </article>
</template>

    
<style scoped>
.card-wrapper {
    position: relative;
}

.captured {
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
    font-size: 0.9rem;
    min-width: 3.6rem;
    min-height: 0.875rem;
    width: 3.6rem;
    color: white;
    border-radius: 2em;
}

.normal {
    background-color: #A8A77A;
}

.grass {
    background: #7AC74C;
}

.poison {
    background-color: #A33EA1;
}


#single-type {
    margin-left: 1.5em;
}
</style>