<template>
  <div id="app" class="clearfix">
    <!--<img src="./assets/logo.png">-->
    <mHeader></mHeader>
    <mNav></mNav>
    <router-view></router-view>
    <mFooter></mFooter>
  </div>
</template>

<script>
  import mNav from '@/components/nav.vue'
  import mHeader from '@/components/Header.vue'
  import mFooter from '@/components/footer.vue'
  // import "bootstrap/dist/js/bootstrap.min.js";
  export default {
    name: 'app',
    data() {
      return {}
    }
    , components: {
      mNav,
      mHeader,
      mFooter
    }
  }

</script>

<style>
  #app {
    margin-bottom:60px;
    /*background: red;*/
  }
</style>