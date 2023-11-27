<script lang="ts">
import PokemonCard from './PokemonCard.vue';

export default {
    components: { PokemonCard }, data() {
        return {
            pokebank: ["psyduck, pikachu, ditto"]
        }
    },
}


</script>


<template>
    
    <div class="flex">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        
    </div>
</template>


<style scoped>
.flex {
    display: flex;
    gap: 3em;
}
</style>

