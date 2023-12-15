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
                <img :src="`${pokemon.image}`" alt="">
                <p class="pokeNumber"> {{ pokemon.id }}</p>

            </div>
            <p class="pokeName"> {{ pokemon.name }}</p>
            <div v-if="pokemon.types && pokemon.types.length > 1">
                <span :class="pokemon.types[0].toLowerCase()" class=" pokeType-wrapper center" id="double-type"> {{ pokemon.types[0] }} </span>
                <span :class="pokemon.types[1].toLowerCase()" class=" pokeType-wrapper center" id="double-type"> {{ pokemon.types[1] }} </span>
            </div>
            <div v-else>
                <span :class="pokemon.types[0].toLowerCase()" class="pokeType-wrapper center" id="single-type"> {{ pokemon.types[0] }} </span>
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
.fire {
    background-color: #EE8130;
}
.water {
    background-color: #6390F0;
}
.electric {
    background-color: #F7D02C;
}

.grass {
    background-color: #7AC74C;
}
.ice {
    background-color: #96D9D6;
}

.fighting {
    background-color: #C22E28;
}
.poison {
    background-color: #A33EA1;
}
.ground {
    background-color: #E2BF65;

}
.flying {
    background-color: #A98FF3;
}
.psychic {
    background-color: #F95587;
}
.bug {
    background-color: #A6B91A;
}
.rock {
    background-color: #B6A136;
}
.ghost {
    background-color: #735797;
}
.dragon {
    background-color: #6F35FC;
}
.dark {
    background-color: #705746;
}

.steel {
    background-color: #B7B7CE;
}

.fairy {
    background-color: #D685AD;
}

#single-type {
    margin-left: 1.5em;
}
</style>