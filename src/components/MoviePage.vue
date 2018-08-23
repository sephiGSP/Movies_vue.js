<template>
    <div class="swipe">
      <div class="inner-swipe" :class="{ translate: moviesState.selectedMovie  }">
        <Grille/>
        <Popup
          v-if="moviesState.selectedMovie"
        />
      </div>
    </div>
</template>

<script>
import Grille from './Grille.vue'
import Popup from './Popup.vue'
import {moviesState} from '../states/movies-state'

export default {
    name: 'MoviePage',
    components:{
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

<style lang="less" scoped>
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
</style>

