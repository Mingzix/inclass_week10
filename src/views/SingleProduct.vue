<template>
  <div>
    <h1>Single Product Page</h1>
    <!--0719--->
    {{ product.title }}
    <ProductInfo :product="product"/>
    <!---same result
    ---0712---
    {{ $route.params.id }}
    -->
  </div>
</template>
<!---0719start--->
<script>
//mapGetters is like a function
import { mapGetters } from "vuex";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  components: { ProductInfo },
  //2step0719
  data() {
    return {
      product: ""
    };
  },
  //[]---array
  //{}---string include objects
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  //3step0719

  /*way01
    created() {
    this.product = this.$strore.getters.getProductById(this.id);
    console.log(this.product);*/
  //way02
  computed: mapGetters(["getProductById"]),
  created() {
    //"this.id" send back to getProductById
    this.product = this.getProductById(this.id);
    console.log(this.product);
  }
};
</script>
<!---0719end---->