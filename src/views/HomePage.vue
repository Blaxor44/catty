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

export default {
  name: "home",
  data: function () {
    return {
      cards: cards,
      cards2,
    };
  },
  components: {
    Cards,
  },
};
</script>

<style>
body {
  margin-top: 100px;
}
</style>
