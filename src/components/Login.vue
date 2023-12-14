
<script lang="ts">
import axios from 'axios';
//<button v-if="userAuthed" @click="logout">Logout</button>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
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
      <form @submit.prevent="submitForm">
        
        <span class="spanlogin container">Login</span>
        <input type="text" v-model="formData.username" placeholder="Username" required>
        
        <input type="password" v-model="formData.password" placeholder="Password" required>
        <div class="forgot-password">
    <a href="#">Forgot your password?</a>
  </div>
        <div class="container">
          <button type="submit" class="btn btn-primary btn-block buttonblue">Sign in
          </button>
        </div>
        
      </form>
    </div>

  
    <div class="maxsize">
      <h1>New here?</h1>
      <h2>Sign up now and synchronize your <br> captured pokemons in all your dispositives.</h2>
      <div class=" buttonregister">
      <router-link to="/Register" class="btn btn-primary btn-block buttonblue" type="button">Sign up</router-link>
  </div>
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

.buttonblue {
  width: 175px;
}

.buttonregister {
  padding-top: 20px;
}

.forgot-password {
margin-top: -10px;
margin-left: 5px;
display: flex;
padding-bottom: 10px;

}
.maxsize{
  display: flex;
  margin-left: 700px;
  height: 100px;
  margin-top: 180px;
  flex-direction: column;
  align-items: center;


}

.spanlogin {
  font-family: 'Outfit', sans-serif;
  font-size: 32px;
  margin-bottom: 20px;
  display: flex;
  margin-top: -30px;
}
h1 {
  font-family: 'Outfit', sans-serif;
  font-size: 55px;
  max-width: 600px;
  text-align: center;
}

h2 {
  text-align: center ;
max-width: 650px;

}

  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}



#app {
  color: #1a2938;
  margin-left: 200px;
  margin-top: 150px;
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
  