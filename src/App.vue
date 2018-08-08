<template>
  <div id="app">
    <Header/>
    <Grille/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Grille from './components/Grille.vue'

export default {
  name: 'app',
  components: {
    Header,
    Grille
  }
}
</script>

<style>
@import '~normalize.css';
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #17181b;
}
</style>
