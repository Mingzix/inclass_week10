<template>
  <div>
    <h1>Product Inventory</h1>
    <!--0719-update inventory_step05 start--create table for inventory--->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <!---get product in products from below "computed"-->
        <tr v-for="product in products" :key="product.id">
          <td>{{product.id}}</td>
          <td>{{product.title}}</td>
          <td>{{product.price}}</td>
          <!---step 1 --- add quantity in inventory page--->
          <td>
            <input type="number" v-model="product.quantity">
          </td>
          <td>
            <!---step 2 --- add quantity in inventory page--->
            <button @click="sendQuantity(product.quantity, product)" class="btn btn-warning">Add</button>
            <!---we dont have this medthod yet, now go to create the method-->
          </td>
        </tr>
      </tbody>
    </table>
    <!---pdate inventory_step05 end--->
  </div>
</template>
<!--0719 update inventory  step04--->
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    //map the products in state which is in the store.js
    ...mapState(["products"])
    //newComputed(){ }
  },
  //step 3 --- add quantity in inventory page, next step ,go to store.js
  methods: {
    ...mapActions(["updateQuantity"]),
    sendQuantity(quantity, product) {
      //send the quantity to store and update the state anf database
      if (quantity >= 0) {
        this.updateQuantity({ quantity: quantity, product: product });
      } else {
        //throw an error
        console.log("quantity must be 0 or above");
      }
    }
  }
};
</script>
