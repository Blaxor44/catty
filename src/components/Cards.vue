<template>
  <div class="card">
    <div class="fill" data-mdb-ripple-color="light">
      <img :src="slike.url" class="slikice" />
      <a href="#!">
        <div
          class="mask"
          style="background-color: rgba(251, 251, 251, 0.15)"
        ></div>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ slike.naziv }}</h5>
      <p class="card-text">{{ slike.cijena }}</p>
      <a :href="slike.link" class="btn btn-primary">Preview</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slike"],
  name: "Cards",
};
</script>
<style>
.card {
  margin-bottom: 5px;
  margin-top: 20px;
}

.slikice {
  max-width: 100%;
  width: 490px;
  height: 320px;
}
</style>
