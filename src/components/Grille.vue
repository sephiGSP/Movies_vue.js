<template>
    <main>
        <Affiche
            v-for="(movie, index) in movies"
            :key="index"
            :title="movie.title"
            :src="movie.poster"
        >
        </Affiche>
    </main>
</template>

<script>
import Affiche from './Affiche.vue'

export default {
    name:'Grille',
    components: {
        Affiche
  },
  data () {
      return {
        movies: null
      }
    },
    async created (){
        try{
            let response = await fetch("movies.json")
            const mov = await response.json()
            this.movies = mov
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
