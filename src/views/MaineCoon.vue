<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col">
      <div class="card">
        <img
          src="@/assets/maine_coon.png"
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">Maine Coon</h5>
          <p class="card-text">
            This is the quintessential American cat breed. It is the result of a
            spontaneous mutation that took place among farm cats in upstate New
            York around 1966. The feline's trademark wirehaired coat
            distinguishes it from other breeds. The American Wirehair is easy to
            look after and resilient to diseases which makes them a favorite
            among casual cat lovers as well as serious breeders. Similar to the
            American Shorthair, the Wirehair is playful, affectionate,
            good-natured, adaptable, and even clownish. It is an athletic cat
            that is moderately active. The American Wirehair is also smart and
            likes playing with interactive and puzzle toys. It likes to
            socialize with visitors and follows household members everywhere.
            The breed is generally healthy and doesn't need combing or brushing
            except in spring when it sheds its winter coat. It gets along great
            with children and other pets in the household.
            <br />
            $800
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
