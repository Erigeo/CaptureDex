<template>
  <div class="container">
    <div class="maxsize">

        <p>Welcome to CaptureDex, a online pokedex focused in your personal progress.</p>
    </div>

    <div class=" ">
      <router-link to="/pokedex" class="btn btn-primary btn-block buttonblue" type="button">Get started</router-link>
  </div>

</div>

<div class="imgcontainer">
  <img src="/imagens/rottom.webp" alt="">
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');


.imgcontainer {
  right: 500px;
  margin-left: 850px;
  margin-top: -350px;
}

img {
  max-width: 500px; 
}

.buttonblue {
  margin-top: 175px;
  width: 175px;
}

.maxsize{
  max-width: 700px;
  display: flex;
  margin-left: 150px;
  height: 100px;
  margin-top: 100 px;
  

}

p {
  font-family: 'Outfit', sans-serif;
  font-size: 55px;
  letter-spacing: -0.02em;
  


}

.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  margin-left: -250px;
  margin-top: 150px;
}


</style>