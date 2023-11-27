<script lang="ts">
import { PokemonData } from '@/http';
import PokemonCard from './PokemonCard.vue';


export default {
    components: { PokemonCard}, data() {
        return {
            pokebank: PokemonData()
        }
    },
}


</script>


<template>
    
    <div v-for="pokemon in pokebank" :key="pokemon.name" class="flex">
        <PokemonCard :pokemon="pokemon"/>
        
    </div>

</template>


<style scoped>
.flex {
    display: inline-flex;
    gap: 3em;
}
</style>

