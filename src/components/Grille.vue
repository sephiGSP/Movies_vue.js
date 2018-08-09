<template>
    <main>
        <Affiche
            v-for="(movie, index) in moviesState.movies"
            :key="index"
            :movie="movie"
        >
        </Affiche>
        <Loader
        v-if="load.value"/>
    </main>
</template>

<script>
import Affiche from './Affiche.vue'
import Loader from './Loader.vue'
import {moviesState} from '../states/movies-state'

export default {
    name:'Grille',
    components: {
        Affiche
    },
  data () {
      return {
        moviesState,
        load: {
            value: false
            }
        }
    },
    async created (){
        try{
            this.load.value = true
            let response = await fetch("http://localhost:5000/movies")
            const mov = await response.json()
            this.moviesState.movies = mov
            this.load.value = false
        } catch (error){
            console.error(error);
        }
    }
}
</script>

<style lang="less" scoped>
main{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
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
