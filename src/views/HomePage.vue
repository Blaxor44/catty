<template>
    <img src="@/assets/catty.png" height="220" width="220" alt="">
    <h1>Looking for a cat to own? 
Looking for one of the best breeds there is?<br>
You are at the right place. Explore and order a cat you like.</h1>
  <div class="row">
    <div class="col-1"></div>
    <div class="col">
      <cards v-for="card in cards" :key="card" :slike="card"/>
    </div>
    <div class="col">
      <cards v-for="card2 in cards2" :key="card2" :slike="card2"/>
    </div>
    <div class="col-1"></div>
  </div>


</template>


<script>

  let cards= []
  let cards2=[]
  let naziv=[]
  let naziv2=[]
  let cijena=[]
  let cijena2=[]

  cards=[
    require("@/assets/ashera.jpg"),
    require("@/assets/bengal.png"),
    require('@/assets/peterbald.jpg'),
    require('@/assets/scottish_fold.jpg'),
    require('@/assets/american_curl.png'),
  ],

  cards2=[
    require('@/assets/savannah.jpg'),
    require('@/assets/persian.png'),
    require('@/assets/sphynx.png'),
    require('@/assets/russian_blue.jpeg'),
    require('@/assets/maine_coon.png'),
  ]

  naziv=[
    




  ]

    // @ is an alias to /src
    import Cards from '@/components/Cards.vue'
import { assertThrowStatement } from '@babel/types'
    export default {
     name: 'home',
     data: function() {
        return {
          cards: cards, cards2,
        };

     },
     components: {
     Cards
     }
    }
    </script>

<style>
    body {
    margin-top: 100px;
}


</style>