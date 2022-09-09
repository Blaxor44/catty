<template>
    <img src="@/assets/catty.png" height="220" width="220" alt="">
    <h1>Looking for a cat to own? 
Looking for one of the best breeds there is?<br>
You are at the right place. Explore and order a cat you like.</h1>
  <div class="row">
    <div class="col-1"></div>
    <div class="col">
      <cards/>
      <cards/>
      <cards/>
      <cards/>
      <cards/>
    </div>
    <div class="col">
        <cards/>
        <cards/>
        <cards/>
        <cards/>
        <cards/>
    </div>
    <div class="col-1"></div>
  </div>


</template>


<script>
    // @ is an alias to /src
    import Cards from '@/components/Cards.vue'
    export default {
     name: 'home',
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