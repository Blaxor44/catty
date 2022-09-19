<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col">
      <div class="card">
        <img
          src="@/assets/bengal.png"
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">Bengal</h5>
          <p class="card-text">
            Bengal cats have a feral and exotic look but make ideal feline pets.
            This breed is noted for its spotted coat and muscular build. The
            Bengal cat is domesticated but its origin can be traced back to the
            1970s when a wild Asian leopard cat was mated with domestic
            shorthairs. It makes a fun pet as it is active and smart. But this
            breed can be a challenge to keep at home as they are inquisitive and
            satisfy their curiosity by jumping into aquariums, playing with
            switches, hanging from chandeliers and doing other antics. Because
            of its feral origins, the Persian cat is much larger in size
            compared to your average pet cat. A gorgeous Bengal with the right
            pedigree, generation, and coat quality can fetch up to $25,000.
            Personality-wise, Bengals are affectionate, child- and dog-friendly,
            and very social. In addition, they are energetic and extremely
            playful.
            <br />
            $20,000
          </p>
          <a href="/co" class="btn btn-primary">Purchase</a>
        </div>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
};
</script>

<style>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
body {
  margin-top: 100px;
}
</style>
