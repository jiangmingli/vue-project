<template>
  <div id="app" class="clearfix">
    <!--<img src="./assets/logo.png">-->
    <mHeader v-show="false"></mHeader>
    <mNav></mNav>
    <router-view></router-view>
    <mFooter></mFooter>
  </div>
</template>

<script>
  import mNav from '@/components/nav.vue'
  import mHeader from '@/components/Header.vue'
  import mFooter from '@/components/footer.vue'
  import {mapGetters,mapActions} from 'vuex'
  // import "bootstrap/dist/js/bootstrap.min.js";
  export default {
    name: 'app',
    data() {
      return {
        headerShow:"true"
      }
    },
    // computed:mapGetters([
    //   'headerShow'
    // ]),
    watch:{//监听路由的变化
      $route(to,from){
        // alert(1);
        if(to.path='/login'){
            this.$store.dispatch('headerShow')
        }
      }
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