<template>
    <div>
        <Loader v-if="load.value"/>
        <img @click="selectMovie()" :src="movie.poster"/>
        <p>{{movie.title}}</p>
    </div>
</template>

<script>
import {moviesState} from '../states/movies-state'
import Loader from './Loader.vue'

export default {
  name: 'Affiche',
  components: {
      Loader
  },
  props:{
      movie: Object,
  },
  data () {
      return {
        moviesState,
        load: {
            value: false
        }
      }
    },
  methods: {
     async selectMovie(){
        try{
            this.load.value = true
            let response = await fetch("http://localhost:5000/movies/" + this.movie.id)
            const movie = await response.json()
            this.moviesState.selectedMovie = movie
            this.load.value = false 
        } catch (error){
            console.error(error);
        }      }
  }
}
</script>

<style lang="less" scoped>
div{
    position: relative;
    padding: 10px;
    margin: 10px;
    height: 460px;
    width: 300px;
    word-wrap: break-word;
    img{
        border-radius: 10px;
        height: 400px;
        width: 300px;
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        transition: transform 0.5s;
    }
    img:hover{
        border: 6px solid #2b17d8;
        transform-origin: top 0 left 0;
        transform: scale(1.25);
    }
}
    
@media screen and (max-width: 751px) and (min-width: 351px){
    img{
        height: 300px;
        width: 250px;
    }
}

@media screen and (max-width: 1600px) and (min-width: 751px){
    div{
        height: 260px;
        width: 180px;
        img{
            height: 200px;
            width: 150px;
        }
    }
}
</style>
