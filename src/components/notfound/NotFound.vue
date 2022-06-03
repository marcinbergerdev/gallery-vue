<template>
  <main class='error-container'>
    <header>
      <h1>
         Page Not Found please go back <router-link to="/home">here</router-link>
      </h1>
    </header>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error-container{
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   padding: 0 50px;
   background-color: #C0C0C0;
}

</style>
