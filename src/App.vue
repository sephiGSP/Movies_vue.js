<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import {moviesState} from './states/movies-state'


export default {
  name: 'app',
  components: {
    Header,
  },
  data () {
    return {
      moviesState
    }
  },
}
</script>

<style lang="less">
@import '~normalize.css';
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #17181b;
}
</style>
