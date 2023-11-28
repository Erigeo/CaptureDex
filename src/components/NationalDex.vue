<script lang="ts">
import { PokemonData } from '@/http';
import PokemonCard from './PokemonCard.vue';


export default {
    components: { PokemonCard }, data() {
        return {
            pokebank: PokemonData(),
            showCaptured: false,
            showNonCaptured: true
        }
    },
    computed: {
        filteredPokemon() {
            return this.pokebank.filter(pokemon =>
                (pokemon.captured && this.showCaptured) || (!pokemon.captured && this.showNonCaptured)
            );
        },
    },
}


</script>


<template>
    <h2 class="text-center mt-5">Pokedex</h2>
    <div class="d-flex justify-content-center toggles mt-4">
        <div class="form-check form-switch form-check-inline">
            <input v-model="showCaptured" class="form-check-input" type="checkbox" role="switch"
                id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Exibir pokémons capturados</label>
        </div>
        <div class="form-check form-switch form-check-inline ">
            <input v-model="showNonCaptured" class="form-check-input" type="checkbox" role="switch"
                id="flexSwitchCheckChecked" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">Exibir pokémons não capturados</label>
        </div>
    </div>
    <section class="d-flex align-items-center justify-content-center mt-5">
        <div class="card-list-pokemon">
            <div class="" v-for="pokemon in filteredPokemon" :key="pokemon.name">
                <PokemonCard class="mb-2" :pokemon="pokemon" />
            </div>
        </div>
    </section>
</template>


<style scoped>
.card-list-pokemon {
    display: grid;
    grid-template-columns: repeat(6, 5fr);
    gap: 2em;
}
</style>

