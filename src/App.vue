<template>
  <nav
    class="navbar navbar-dark bg-dark fixed-top"
    v-if="!$route.meta.hideNavbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/homepage">CATTY</a>
      <nav>
        <router-link to="/homepage">Home</router-link> |
        <a href="#" @click.prevent="logout">Log out</a>
      </nav>
    </div>
  </nav>
  <router-view />
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase.js";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    console.log("*** User", user.email);
    store.currentUser = user.email;
    if (!currentRoute.meta.needsAuth) {
      router.push({ name: "home" });
    }
  } else {
    // User is not signed in.
    console.log("*** No user");
    store.currentUser = null;
    if (router.name !== "login") {
      router.push({ name: "homelogin" });
      if (currentRoute.meta.needsAuth) {
        router.push({ name: "homelogin" });
      }
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "homelogin" });
        });
    },
  },
};
</script>

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
