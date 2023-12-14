<script lang="ts">
import { PokemonData } from '@/http';
import PokemonCard from './PokemonCard.vue';


export default {
    components: { PokemonCard }, data() {
        return {
            pokebank: PokemonData(),
            showCaptured: false,
            showNonCaptured: true,
            selectedGame: "All games",
            games: [
                { id: 1, label: "All games" },
                { id: 2, label: "Emerald" },
                { id: 3, label: "Fire Red" },
            ],
            capturedKey: 0,
            search: ""
        }
    },
    computed: {
        filteredPokemon() {
            return this.pokebank.filter(pokemon =>
                (pokemon.game.indexOf(this.selectedGame) !== -1 || this.selectedGame == "All games") && ((pokemon.captured && this.showCaptured) || (!pokemon.captured && this.showNonCaptured)) &&
                (pokemon.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1)
            );
        },
    },
    watch: {
        'pokebank': {
            deep: true,
            handler() {
                this.capturedKey += 1;
            },
        },
    },
    methods: {
        selectGame(game: { id: number; label: string; }) {
            this.selectedGame = game.label;
        },
    },
}


</script>


<template>
    <h2 class="text-center mt-5">Pokédex</h2>
    <section id="background">
    <div class="d-flex justify-content-center toggles mt-5 container-fluid" >
        <div class="row">
            <div class="form-check form-switch form-check-inline col-3">
                <input v-model="showCaptured" class="form-check-input" type="checkbox" role="switch"
                    id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Show captured pokémon</label>
            </div>
            <div class="form-check form-switch form-check-inline col-3">
                <input v-model="showNonCaptured" class="form-check-input" type="checkbox" role="switch"
                    id="flexSwitchCheckChecked" checked>
                <label class="form-check-label" for="flexSwitchCheckChecked">Show missing pokémon</label>
            </div>
            <div class="dropdown-center col-2 me-4" id="games">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{ selectedGame || "Todos os jogos" }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="game in games" :key="game.id">
                        <a class="dropdown-item" @click="selectGame(game)">{{ game.label }}</a>
                    </li>
                </ul>

            </div>

            <div class="d-flex col-2 ms-5" id="search-bar">
                <form class="d-flex" role="search">
                    <div class="input-group">
                        <input v-model="search" class="form-control border-0" type="search" placeholder="Search"
                            aria-label="Search">
                        <span class="input-group-text border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </span>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <section class="d-flex align-items-center justify-content-center mt-5">
        <div class="card-list-pokemon">
            <div class="" v-for="pokemon in filteredPokemon" :key="pokemon.name">
                <PokemonCard class="mb-2" :pokemon="pokemon" />
            </div>
        </div>
    </section>
    </section>
</template>


<style scoped>
.card-list-pokemon {
    display: grid;
    grid-template-columns: repeat(6, 5fr);
    gap: 2em;
}

#games {
    width: 7.5em;
}

#search-bar {
    height: 2.42em;
}

.bi bi-search {
    position: absolute;
}





</style>

