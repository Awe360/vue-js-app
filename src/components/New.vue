<!-- login page -->

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required /> 
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>    
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const handleLogin = () => {
  // Placeholder for login logic
  alert(`Logging in with username: ${username.value} and password: ${password.value}`);
};

</script>
