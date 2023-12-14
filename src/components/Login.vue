
<script lang="ts">
import axios from 'axios';
//<button v-if="userAuthed" @click="logout">Logout</button>
export default {
  data() {
    return {
      formData: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    loginUsuario() {
      axios.post('http://localhost:3000/api/capturedex/LoginUser', this.formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
}
};
</script>


<template>
    <div id="app">
      <form @submit.prevent="loginUsuario">
        <label for="username">Nome de usuário:</label>
        <input v-model="formData.user" type="text" id="username" required>
        
        <label for="password">Senha:</label>
        <input v-model="formData.password" type="password" id="password" required>
        
        <button type="submit">Login</button>

      </form>
    </div>
  </template>
  

  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    margin-bottom: 16px;
    padding: 8px;
  }
  </style>
  