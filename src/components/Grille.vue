<template>
    <main>
        <Affiche
            v-for="(movie, index) in moviesState.movies"
            :key="index"
            :movie="movie"
        >
        </Affiche>
        <Popup
        v-if="moviesState.selectedMovie"
        />
    </main>
</template>

<script>
import Affiche from './Affiche.vue'
import Popup from './Popup.vue'
import {moviesState} from '../states/movies-state'

export default {
    name:'Grille',
    components: {
        Affiche,
        Popup
  },
  data () {
      return {
        moviesState
      }
    },
    async created (){
        try{
            let response = await fetch("movies.json")
            const mov = await response.json()
            this.moviesState.movies = mov
        } catch (error){
            console.error(error);
        }
    }  
}
</script>

<style lang="less" scoped>
main{
    height: 85vh;
    flex-grow: 1;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-weight: bold;
    margin-left: 100px;
}

@media screen and (max-width: 350px){
    main{
        flex-direction: column;
    }
}

@media screen and (max-width: 751px) and (min-width: 351px){
    main{
        flex-direction: column;
    } 
}
</style>
