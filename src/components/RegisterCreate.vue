
<script lang="ts">

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      // Enviar dados para o backend usando o método POST
      fetch(')', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Lógica adicional após o envio bem-sucedido
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
    },
  },
};
</script>


<template>
    <div id="app">
      <form @submit.prevent="submitForm">
        
        
        <input type="text" v-model="email" placeholder="Email" required>
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
       
        <div class="container">
          <button type="submit" class="btn btn-primary btn-block buttonblue">Register</button>
        </div>
        
      </form>
    </div>


    <div class="maxsize">
     
      <span>
          Create an account now and synchronize your captured pokemons in all your dispositives.
      </span>

    </div>
    <div class="containerimg">
        <img src="/imagens/eevee.png" alt="">
      </div>
  </template>
  

  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');

.containerimg {
 margin-top: 140px;
 margin-left: 1030px;
}

img {
  width: 150px;
}

.maxsize{
  display: flex;
  margin-left: 750px;
  height: 100px;
  margin-top: 115px;

}

span {
  font-family: 'Outfit', sans-serif;
  font-size: 42px;  
  max-width: 625px;
  text-align: center;
  letter-spacing: -1.8px;
  word-spacing: -0.6px;

  


}

  button {
    width: 125px;
    border-radius: 30px;
    border: none;
    
  }

  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

#app {
  color: #1a2938;
  margin-left: 200px;
  margin-top: 110px;
  background-color: rgb(246, 141, 141);
  width: 400px;
  height: 300px;
  border-radius: 15px;
  float: left;
  padding-top: 50px;

}
  
  form {
  
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    border-radius: 15px;
    border: none;
    

  }
  
  label {
    margin-bottom: 8px;
    border: none;
    margin-top: 25px;
  }
  
  input {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 15px;
    border: none;
    height: 50px;
    
  }
  </style>
  