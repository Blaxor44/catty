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
                <h2 class="fw-bold mb-2 text-uppercase">Sign up</h2>
                <p class="text-white-50 mb-5">
                  Please enter your new email and password!
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
                  <label class="form-label" for="typePasswordX"
                    >New Password</label
                  >
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    v-model="passwordRepeat"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX"
                    >Repeat Password</label
                  >
                </div>

                <button
                  onclick="location.href='#!';"
                  @click="signup"
                  class="btn btn-outline-light btn-lg px-5"
                  type="button"
                >
                  Sign up
                </button>

                <div
                  class="d-flex justify-content-center text-center mt-4 pt-1"
                >
                  <a href="#!" class="text-white"
                    ><i class="fab fa-facebook-f fa-lg"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-google fa-lg"></i
                  ></a>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  Already registered?
                  <a href="/" class="text-white-50 fw-bold">Log in here</a>
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
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(function () {
          console.log("Uspjesna registracija");
          window.location.href = "/";
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
    rgba(37, 117, 252, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}
body {
  margin: 0 !important;
}
</style>
