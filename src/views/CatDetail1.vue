<template>
    <div class="container text-center">
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <cards/>
    </div>
    <div class="col-2"></div>
  </div>
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