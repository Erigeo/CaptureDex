<script lang="ts">
import { PokemonData } from '@/http';
import PokemonCard from './PokemonCard.vue';


export default {
    components: { PokemonCard }, data() {
        return {
            pokebank: PokemonData()
        }
    },
}


</script>


<template>
    <h2 class="text-center mt-5">Pokedex</h2>
    <section class="d-flex align-items-center justify-content-center mt-5">
            <div class="row row-cols-6 g-0">
                <div v-for="pokemon in pokebank" :key="pokemon.name">
                    <PokemonCard class="mb-2" :pokemon="pokemon" />
                </div>
            </div>
    </section>
</template>


<style scoped>
section {}
</style>

