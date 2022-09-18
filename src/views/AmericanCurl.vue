<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col">
      <div class="card">
        <img
          src="@/assets/american_curl.png"
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">American Curl</h5>
          <p class="card-text">
            The American Curl is affectionate and playful and a popular breed
            among cat lovers. Its distinguishing physical traits are its silk
            flat-lying coat, medium-sized rectangular body, expressive eyes, and
            curling ears. The origin of this breed can be traced back to a stray
            black female cat with long hair and funny ears that was adopted by
            Joe and Grace Ruga in Lakewood, California in 1981. The couple named
            the cat “Shulamith” and all American Curls are traced back to this
            feline. The trademark curly ears of the American Curl have been
            caused by random mutation. This cat has a very affectionate
            personality and likes to socialize with humans and other cats. It is
            not very vocal but an intelligent breed. The long-haired cats of
            this variety need plenty of grooming.
            <br />
            $1,000
          </p>
          <a href="/ba" class="btn btn-primary">Purchase</a>
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
