<template>
<nav class="navbar navbar-dark bg-dark fixed-top" v-if="!$route.meta.hideNavbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/homepage">CATTY</a>
  <nav>
    <router-link to="/homepage">Home</router-link> |
    <router-link to="/">Log out</router-link>
  </nav>
  </div>
</nav>
  <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
