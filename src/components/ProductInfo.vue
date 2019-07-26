<template>
  <div>
    <!----0719--->
    <h1>{{product.title}}</h1>
    <p>Description: {{product.description}}</p>
    <p>Price: &#36;{{product.price}}</p>
    <p>Quantity: {{product.quantity}}</p>
    <!---connet to the data(){}in the script--->
    <input type="number" v-model="quant">
    <!---<button disabled class="btn btn-info">Buy</button>--->
    <!---quant is the the date property we have setted--->
    <!----@click="updateProduct" function could be set ether in store.js or here
    For click-updat-step01--->
    <button
      :disabled="product.quantity < quant || quant === 0 || quant === ''"
      class="btn btn-info"
      @click="updateProducts"
    >Buy</button>
  </div>
</template>
<!----0719start--->
<script>
//For click-update-step03
import { mapActions } from "vuex";
export default {
  //for the <input...>
  data() {
    return {
      quant: 0
    };
  },
  /*all prodcut info get from database, use "actions: { fetchData({ commit }) { axios....}"   in the store.js to get database  */
  props: ["product"],
  methods: {
    //For click-update-step02
    /* way 01:
      updateProducts() {
      this.$store.dispatch('buyProducts',this.quant)
        }
      */
    ...mapActions(["buyProducts"]),
    updateProducts() {
      //dispatch an action to update the quantity
      this.buyProducts({ quantity: this.quant, product: this.product });
      this.quant = 0;
    }
  }
};
</script>
<!----0719end-->