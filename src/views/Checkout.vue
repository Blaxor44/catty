<template>
  <div class="card">
    <div class="leftside">
      <img src="@/assets/catty.png" class="product" alt="Shoes" />
    </div>
    <div class="rightside">
      <form action="" @submit.prevent="postNewOrder">
        <h1>CheckOut</h1>
        <h2>Payment Information</h2>
        <p>Full Name</p>
        <input
          type="text"
          v-model="newOrderName"
          class="inputbox"
          name="name"
          id="name"
          required
        />
        <p>Phone number</p>
        <input
          v-model="newOrderPhone"
          type="text"
          class="inputbox"
          name="number"
          id="number"
          required
        />
        <p>Country</p>
        <input
          v-model="newOrderCountry"
          type="text"
          class="inputbox"
          name="country"
          id="country"
          required
        />
        <p>City</p>
        <input
          type="text"
          v-model="newOrderCity"
          class="inputbox"
          name="city"
          id="city"
          required
        />
        <p>Adress</p>
        <input
          v-model="newOrderAdress"
          type="text"
          class="inputbox"
          name="adress"
          id="adress"
          required
        />
        <p>Zip/Postal Code</p>
        <input
          type="text"
          v-model="newOrderPostalcode"
          class="inputbox"
          name="code"
          id="code"
          required
        />
        <p>Cardholder Name</p>
        <input
          type="text"
          v-model="newOrderCardHolder"
          class="inputbox"
          name="name"
          required
        />
        <p>Card Number</p>
        <input
          v-model="newOrderCardNumber"
          type="number"
          class="inputbox"
          name="card_number"
          id="card_number"
          required
        />

        <p>Card Type</p>
        <select
          class="inputbox"
          v-model="newOrderCardType"
          name="card_type"
          id="card_type"
          required
        >
          <option value="">--Select a Card Type--</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
        </select>
        <div class="expcvv">
          <p class="expcvv_text">Expiry</p>
          <input
            v-model="newOrderExpiry"
            type="date"
            class="inputbox"
            name="exp_date"
            id="exp_date"
            required
          />

          <p class="expcvv_text2">CVV</p>
          <input
            v-model="newOrderCVV"
            type="password"
            class="inputbox"
            name="cvv"
            id="cvv"
            required
          />
        </div>
        <p></p>
        <button type="submit" class="button">CheckOut</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "home",
  data: function () {
    return {
      newOrderName: "",
      newOrderPhone: "",
      newOrderCountry: "",
      newOrderCity: "",
      newOrderAdress: "",
      newOrderPostalcode: "",
      newOrderCardHolder: "",
      newOrderCardNumber: "",
      newOrderCardType: "",
      newOrderExpiry: "",
      newOrderCVV: "",
    };
  },

  methods: {
    postNewOrder() {
      db.collection("orders")
        .add({
          name: this.newOrderName,
          phone: this.newOrderPhone,
          country: this.newOrderCountry,
          city: this.newOrderCity,
          adress: this.newOrderAdress,
          code: this.newOrderPostalcode,
          cardholder: this.newOrderCardHolder,
          cardnumber: this.newOrderCardNumber,
          cardtype: this.newOrderCardType,
          expiry: this.newOrderExpiry,
          cvv: this.newOrderCVV,
          email: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newOrderName = "";
          this.newOrderPhone = "";
          this.newOrderCountry = "";
          this.newOrderCity = "";
          this.newOrderAdress = "";
          this.newOrderPostalcode = "";
          this.newOrderCardHolder = "";
          this.newOrderCardNumber = "";
          this.newOrderCardType = "";
          this.newOrderExpiry = "";
          this.newOrderCVV = "";
          window.location.href = "/os";
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style>
.card {
  width: 60rem;
  margin: auto;
  background: white;
  position: center;
  align-self: center;
  border-radius: 1.5rem;
  box-shadow: 4px 3px 20px #3535358c;
  display: flex;
  flex-direction: row;
}

.leftside {
  background: #030303;
  width: 25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.product {
  object-fit: cover;
  width: 20em;
  height: 20em;
  border-radius: 100%;
}

.rightside {
  background-color: #ffffff;
  width: 35rem;
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 1rem 2rem 3rem 3rem;
}

.inputbox {
  color: #030303;
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1.5px solid #ccc;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  font-family: "Roboto", sans-serif;
  color: #615a5a;
  font-size: 1.1rem;
  font-weight: 500;
  outline: none;
}

.expcvv {
  display: flex;
  justify-content: space-between;
  padding-top: 0.6rem;
}

.expcvv_text {
  padding-right: 1rem;
}
.expcvv_text2 {
  padding: 0 1rem;
}

.button {
  background: linear-gradient(135deg, #753370 0%, #298096 100%);
  padding: 15px;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 10px;
  width: 100%;
  letter-spacing: 0.11rem;
  outline: none;
}

.button:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 3px 3px 6px #38373785;
}

@media only screen and (max-width: 1000px) {
  .card {
    flex-direction: column;
    width: auto;
  }

  .leftside {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-radius: 0;
  }

  .rightside {
    width: auto;
    border-bottom-left-radius: 1.5rem;
    padding: 0.5rem 3rem 3rem 2rem;
    border-radius: 0;
  }
}
body {
  margin-top: 100px;
}
</style>
