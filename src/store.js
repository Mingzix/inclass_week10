import Vue from "vue";
import Vuex from "vuex";
//0712
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    //0719 for click update step05
    PRODUCTS_SOLD(state, data) {
      //update the product quantity in the state
      //for click updatestep06 start---create getter to get the product index
      const productIndex = this.getters.getProductIndex(data.product.id);
      state.products[productIndex].quantity -= data.quantity;
      //the line above is same as writing this
      //state.products[productIndex].quantity -= state.products[producyIndex].quantity - data.quantity;
      //for click updatestep06 end
      //click to update step08--make API call to update the Database
      axios
        .put(
          "https://week-10-675be.firebaseio.com/products.json",
          state.products
        )
        .then(response => {
          console.log("Your data was updated" + reponse.status);
        })
        .catch(error => {
          console.log("there was an issue saving your data" + error.reponse);
        });
    },
    PRODUCT_QUANTITY(state, data) {
      //get the index of the producy from the array of products
      const productIndex = this.getters.getProductIndex(data.product.id);
      //update the quantitu of the product at the found idnex
      state.products[productIndex].quantity = data.quantity;
      //make API call to uodate to database
      axios
        .put(
          "https://week-10-675be.firebaseio.com/products.json",
          state.products
        )
        .then(response => {
          console.log("Your data was updated" + reponse.status);
        })
        .catch(error => {
          console.log("there was an issue saving your data" + error.reponse);
        });
    }
  },
  actions: {
    fetchData({ commit }) {
      axios
        .get("https://week-10-675be.firebaseio.com/products.json")
        .then(response => {
          console.log(response.data);
          commit("SET_PRODUCTS", response.data);
        });
    },
    //0719 for click update step04
    buyProducts({ commit }, { quantity, product }) {
      commit("PRODUCTS_SOLD", { quantity, product });
    },
    //step 4 --- add quantity in inventory page
    updateQuantity({ commit }, { quantity, product }) {
      //commit a mutation to update the state sending thr payload as { quantity, product }
      commit("PRODUCT_QUANTITY", { quantity, product });
    }
  },
  //0719start
  //find -- js function
  getters: {
    //1step0719
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    },
    //for click update - step07
    getProductIndex: state => id => {
      return state.products.findIndex(product => product.id === id);
    }
  }
});
