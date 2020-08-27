<template>
  <div>导航栏 | <router-link to="/">Home</router-link> | <router-link to="/doc">Doc</router-link></div>
  <router-view></router-view>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
