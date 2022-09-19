<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col">
      <div class="card">
        <img
          src="@/assets/russian_blue.jpeg"
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">Russian Blue</h5>
          <p class="card-text">
            AThis feline attracts onlookers with its brilliant green eyes and
            silvery blue coat. Plus, it is playful and smart which makes it a
            perfect pet for any household. The Russian Blue is loyal to its
            masters and adapts quickly to their moods. They like to socialize
            with their owners but are a bit shy with strangers. This breed can
            be expensive at about $3,000 a kitten, but they aren't high
            maintenance. The Russian Blue is also known as “the Archangel cat”
            as its origins can be traced to the city of Archangel in Russia. It
            was introduced to the rest of the world in 1875 in England. As
            mentioned above, Russian Blue cats are reserved with strangers and
            stick to themselves. Despite this apparently cold personality, they
            look often content and happy because their mouth shape resembles a
            small smile.
            <br />
            $2,800
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
