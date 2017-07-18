<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/list">列表</router-link>
        <router-link to="/detail">详情</router-link>
      </li>
    </ul>
    <my-component></my-component>-->
    
  </div>
</template>

<script>
  import Vue from 'vue'
  import nav from './nav'
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  Vue.component('my-component', {
    template: '<div>A custom component!</div>'
  })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }*/
</style>