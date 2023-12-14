
<script lang="ts">

export default {
  data() {
    return {
      username: '',
      password: '',
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
        <label for="username">Nome de usuário:</label>
        <input type="text" v-model="username" required>
        
        <label for="password">Senha:</label>
        <input type="password" v-model="password" required>
        
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
  