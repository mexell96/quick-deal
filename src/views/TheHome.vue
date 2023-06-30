<template>
  <div class="container">
    <h1 class="title">Home Page</h1>
    <router-link class="link" to="/todolist">Go to Todo List</router-link>
  </div>
</template>

<script>
export default {
  name: "TheHome",
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.link {
  color: #000;
  display: block;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
}
</style>
