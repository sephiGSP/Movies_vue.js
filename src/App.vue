<template>
  <div id="app">
    <Header/>
    <div class="swipe">
      <div class="inner-swipe" :class="{ translate: moviesState.selectedMovie  }">
        <Grille/>
        <Popup
          v-if="moviesState.selectedMovie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Grille from './components/Grille.vue'
import Popup from './components/Popup.vue'
import {moviesState} from './states/movies-state'


export default {
  name: 'app',
  components: {
    Header,
    Grille,
    Popup
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
  .swipe{
    position: relative;
    overflow: hidden;
    flex-grow: 1;
  
    .inner-swipe{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 200vw;
      transition-duration: 2s;

      &.translate {
        transform: translate(-100vw);
      }
    }
  }
}
</style>
