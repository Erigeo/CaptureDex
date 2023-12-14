<script lang="ts">
import axios from 'axios';


export default {
  data() {
    return {
      formData: {
        user: '',
        password: '',
        // Adicione mais campos conforme necessário
      },
    };
  },  methods: {
    sendData() {
      axios.post('http://localhost:3000/api/capturedex/AddUsers', this.formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};

</script>

<template>
    <div id="app">
      <form @submit.prevent="sendData">
        
        <label for="username">Nome de usuário:</label>
        
        <input v-model="formData.user" type="text" required>
        
        <label for="password">Senha:</label>
        <input v-model="formData.password" type="password" required>
       
        
        <div class="container">
          <button type="submit">Cadastrar-se</button>
        </div>
        
      </form>
    </div>


    <div class="maxsize">
     
      <span>
          Create an account and synchronize your captured pokemons in all your dispositives.
      </span>

    </div>
    <div class="containerimg">
        <img src="/imagens/bulbasaur.png" alt="">
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
  max-width: 600px;
  display: flex;
  margin-left: 750px;
  height: 100px;
  margin-top: 90px;
  text-align: justify;

}

span {
  font-family: 'Outfit', sans-serif;
  font-size: 55px;
  max-width: 600px;
  letter-spacing: -0.03em;
  


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