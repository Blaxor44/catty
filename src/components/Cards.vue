<template>
 <div class="card">
  <div class="fill" data-mdb-ripple-color="light">
    <img :src="slike" class="slikice"/>
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">Preview</a>
    
  </div>
</div>
</template>

<script>
export default {
  props: ['slike', 'cijena', 'naziv'],
  name: 'Cards',
};

</script>
 <style>
.card{
    margin-bottom: 5px;
    margin-top: 20px;
}


.slikice {
max-width: 100%;
width: 490px;
height: 320px;
}

 </style>
