<template>
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