

<template>
    <article class="center">

        <div>
            <div class="pokeCard center">
                <img src="../assets/imagens/ditto.png" class="pokeImage" alt="">
                <p class="pokeNumber"> #0132</p>

            </div>
            <p class="pokeName"> Ditto</p>
            <div class="pokeType-wrapper center normal" id="single-type">
                <p class="pokeType">normal</p>
            </div>

        </div>


    </article>
</template>

    
<style scoped>
.pokeNumber {
    position: absolute;
    top: 4.4rem;
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