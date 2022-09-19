<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <img src="@\assets\catty.png" width="200" height="200" />
                <br /><br />
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your email and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    v-model="username"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    v-model="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>

                <p class="small mb-5 pb-lg-2">
                  <router-link to="/resetpw" class="text-white-50"
                    >Forgot password?</router-link
                  >
                </p>

                <button
                  @click="login"
                  class="btn btn-outline-light btn-lg px-5"
                  type="button"
                >
                  Login
                </button>

                <div
                  class="d-flex justify-content-center text-center mt-4 pt-1"
                ></div>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account?
                  <router-link to="/signup" class="text-white-50"
                    >Sign up</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { firebase } from "@/firebase.js";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Uspjesna prijava", result);
          this.$router.replace({ name: "homepage" });
        })
        .catch(function (error) {
          console.error("Doslo je do greske, error");
        });
    },
  },
};
</script>
<style>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: auto;
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252)
  );
}
</style>
