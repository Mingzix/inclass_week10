import Vue from "vue";
import Router from "vue-router";
//0712
import Products from "./views/ProductsList.vue";
//0719
import SingleProduct from "./views/SingleProduct.vue";
//0719 link to inventory-step02
import ProductsInventory from "./views/ProductsInventory.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Products
    },
    {
      //
      path: "/product/:id",
      name: "single-product",
      component: SingleProduct,
      props: true
      //
    },
    //0719 link to inventory-step01
    {
      path: "/inventory",
      name: "products-inventory",
      component: ProductsInventory
      //it's not dynamic,so no need for props
    }
  ]
});
