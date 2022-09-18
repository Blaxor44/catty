<template>
  <img src="@/assets/catty.png" height="220" width="220" alt="" />
  <h1>
    Looking for a cat to own? Looking for one of the best breeds there is?<br />
    You are at the right place. Explore and order a cat you like.
  </h1>
  <div class="row">
    <div class="col-1"></div>
    <div class="col">
      <cards v-for="card in cards" :key="card" :slike="card" />
    </div>
    <div class="col">
      <cards v-for="card2 in cards2" :key="card2" :slike="card2" />
    </div>
    <div class="col-1"></div>
  </div>
  <form @submit.prevent="postNewImage" class="form-inline mb-5">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <img src="@\assets\catty.png" width="200" height="200" />
                <h2 class="fw-bold mb-2 text">New Cat</h2>
                <p class="text-white-50 mb-5">Add new cat for sell</p>

                <div class="form-group">
                  <label for="imageUrl">Cat image URL</label>
                  <input
                    v-model="newImageUrl"
                    type="text"
                    class="form-control ml-2"
                    placeholder="Enter image URL"
                    id="imageUrl"
                  />
                  <div class="form-group">
                    <label for="imageDescription">Name</label>
                    <input
                      v-model="newImageName"
                      type="text"
                      class="form-control ml-2"
                      placeholder="Enter name of the cat"
                      id="imageName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="imageDescription">Price</label>
                    <input
                      v-model="newImagePrice"
                      type="text"
                      class="form-control ml-2"
                      placeholder="Enter price"
                      id="imagePrice"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-outline-light btn-lg px-5">
              Post cat
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
let cards = [];
let cards2 = [];

(cards = [
  {
    url: require("@/assets/ashera.jpg"),
    naziv: "Ashera",
    cijena: "$120,000",
    link: "/cd1",
  },
  {
    url: require("@/assets/bengal.png"),
    naziv: "Bengal",
    cijena: "$20,000",
    link: "/cd3",
  },
  {
    url: require("@/assets/peterbald.jpg"),
    naziv: "Peterbald",
    cijena: "$4,500",
    link: "/cd5",
  },
  {
    url: require("@/assets/scottish_fold.jpg"),
    naziv: "Scottish Fold",
    cijena: "$2,800",
    link: "/cd7",
  },
  {
    url: require("@/assets/american_curl.png"),
    naziv: "American Curl",
    cijena: "$1,000",
    link: "/cd9",
  },
]),
  (cards2 = [
    {
      url: require("@/assets/savannah.jpg"),
      naziv: "Savannah",
      cijena: "$45,000",
      link: "/cd2",
    },
    {
      url: require("@/assets/persian.png"),
      naziv: "Persian",
      cijena: "$5,000",
      link: "/cd4",
    },
    {
      url: require("@/assets/sphynx.png"),
      naziv: "Sphynx",
      cijena: "$3,000",
      link: "/cd6",
    },
    {
      url: require("@/assets/russian_blue.jpeg"),
      naziv: "Russian Blue",
      cijena: "$2,800",
      link: "/cd8",
    },
    {
      url: require("@/assets/maine_coon.png"),
      naziv: "Maine Coon",
      cijena: "$800",
      link: "/cd10",
    },
  ]);

import Cards from "@/components/Cards.vue";
import { assertThrowStatement } from "@babel/types";
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "home",
  data: function () {
    return {
      cards: cards,
      cards2,
      newImageUrl: "",
      newImageName: "",
      newImagePrice: "",
    };
  },
  components: {
    Cards,
  },
  methods: {
    postNewImage() {
      db.collection("posts")
        .add({
          url: this.newImageUrl,
          name: this.newImageName,
          price: this.newImagePrice,
          email: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newImageUrl = "";
          this.newImageName = "";
          this.newImagePrice = "";
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style>
body {
  margin-top: 100px;
}
</style>
