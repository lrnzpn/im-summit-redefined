<template>
  <div id="app">
    <Navigation />
    <div class="header-spacer"></div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation: Navigation,
    Footer: Footer
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
