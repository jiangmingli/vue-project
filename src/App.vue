<template>
  <div id="app" class="clearfix">
    <!--<img src="./assets/logo.png">-->
    <loading v-show="loading"></loading>
    <mHeader v-show="headerShow"></mHeader>
    <mNav></mNav>
    <div :haha="parent"></div>
    <router-view></router-view>
    <mFooter v-show="headerShow"></mFooter>
  </div>
</template>

<script>
  import mNav from '@/components/nav.vue'
  import mHeader from '@/components/Header.vue'
  import mFooter from '@/components/footer.vue'
  import { mapGetters, matpActions } from 'vuex'
  // import "bootstrap/dist/js/bootstrap.min.js";
  export default {
    name: 'app',
    data() {
      return {
        parent: "我是来自父组件的信息"
      }
    },
    computed: mapGetters([
      'headerShow',
      'loading'
    ]),
    watch: {//监听路由的变化
      $route(to, from) {
        // alert(1);
        console.log(to.path);
        if (to.path == '/login') {
          console.log(this.$store)
          this.$store.dispatch('hideHeader')
        } else {
          this.$store.dispatch('showHeader')
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

<style scoped lang="less">
  #app {
    margin-bottom: 60px;
    /*background: red;*/
  }
</style>