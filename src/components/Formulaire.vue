<template>
    <div class="form">
        <form @submit.prevent="checkForm">
            <Loader v-if="load.value"/>
            <h1> Formulaire d'ajout de film </h1>
            <p> Nom du film:</p>
            <input v-model="title" name= 'movieName'/>
            <p>Url de l'affiche:</p>
            <input v-model="poster" name= 'poster'/>
            <p>Synopsis:</p>
            <textarea v-model="desc" rows="20" cols="60"></textarea><br>
            <input type='submit' value="Envoyer"/>
        </form>
        <div class="errors" v-if="errors">
            <p v-for="(error, i) in errors" :key="i">{{error}}</p>
        </div>
    </div>
</template>

<script>
import {moviesState} from '../states/movies-state'
import Loader from './Loader.vue'


export default {
    name:'Formulaire',
    components: {
      Loader
    },
    data () {
      return {
        moviesState,
        title: null,
        poster: null,
        desc: null,
        errors: null,
        load: {
            value: false
        }
        }
    },
    methods:{
        checkForm:  async function (e) {
            try {
                this.load.value = true
                console.log(this.title + " " + this.poster + " " + this.desc)
                const reponse = await fetch ("http://localhost:5000/form", {
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({title: this.title, poster: this.poster, desc: this.desc})
                })
                if (!reponse.ok){
                    if (reponse.status === 400){
                        this.load.value= false
                        this.errors = await reponse.json()
                    }else{
                        this.load.value= false
                        this.errors = ['Une erreur est survenue']
                    }
                    
                } else {
                    this.load.value= false
                    this.$router.push({ name: "grille"})
                }
                    
            } catch (error){
                this.load.value= false
                this.errors = ['Une erreur est survenue']
            }
        },
    }
}
</script>

<style lang="less" scoped>
    .form{
        color: white;
        margin-left: 40vw;
    }
    input{
        margin-top: 5px;
    }
    .errors{
        color: red;
        position: absolute;
        top: 50vh;
        left: 20vh;
    }
</style>

