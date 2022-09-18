<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col">
      <div class="card">
        <img
          src="@/assets/sphynx.png"
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">Sphynx</h5>
          <p class="card-text">
            The Sphynx is known for its hairless look caused by a natural
            genetic mutation, which created a healthy and strong breed. Its
            origin can be traced back to a domestic cat that gave birth to a
            hairless kitten in 1966 in Toronto, Canada. The breed is very
            resilient and not prone to any serious genetic or health issues.
            Personality-wise, they are loyal, playful, and enjoy human
            attention. They also like to socialize with other pet cat breeds and
            dogs. As mentioned above, the Sphynx's origin is not Egypt, but
            Toronto, Canada. Its trademark hairlessness is because of a
            recessive gene. Sphynx cats love socializing and are friendly with
            strangers. However, they need to be bathed often as they pile up
            body oils on their skin. In addition, they are not comfortable
            outdoors.
            <br />
            $3,000
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
