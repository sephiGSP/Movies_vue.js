<template>
    <div class="backPop">
        <div class="popup">
            <h3>{{moviesState.selectedMovie.title}}</h3>
            <img :src="moviesState.selectedMovie.poster"/>
            <p>{{moviesState.selectedMovie.desc}}</p>
            <button @click="deselectMovie()" type="button">Fermer</button>
        </div>
    </div>
</template>

<script>
import {moviesState} from '../states/movies-state'

export default {
    name: 'Popup',
    data () {
      return {
        moviesState
      }
    },
    methods: {
        deselectMovie(){
            console.log('hello')
            this.moviesState.selectedMovie = null 
        }
    }
}
</script>

<style lang="less" scoped>
.backPop{
    top: 0;
    left: 0;
    height: 300vh;
    width: 300vh;
    position: fixed;
    background-color: rgba(188,183,183,0.75);
    .popup{
        background-color: #17181b;
        height: 52vh;
        width: 100vh;
        margin-left: 50vh;
        margin-top: 20vh;
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        h3{
            color: white;
            margin-left: 2vh;
        }
        p{
            color: white;
            margin-left: 40vh;
        }
        img{
            float: left;
            margin-left: 2vh;
            margin-bottom: 2vh;
            border-radius: 10px;
            height: 400px;
            width: 300px;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

        }
        button{
            background-color: #126B81;
            border: 2px solid #126B81;
            color: white;
            width: 100vh;
            clear: both;
            border-radius: 8px;
            font-size: 24px;
            padding: 14px 40px;
            cursor: pointer;
        }
        button:active {
            background-color: #126B81;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
    }
}
</style>
