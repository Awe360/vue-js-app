<!-- Branch page -->
<template>
  <div class="branch-container">
    <h2>Branch Information</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="branchName">Branch Name:</label>
        <input type="text" id="branchName" v-model="branchName" required /> 
      </div>
      <div class="form-group">
        <label for="branchLocation">Branch Location:</label>
        <input type="text" id="branchLocation" v-model="branchLocation" required />
      </div>
      <button type="submit">Submit</button>    
    </form>
  </div>
</template>