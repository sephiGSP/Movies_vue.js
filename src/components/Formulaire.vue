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
        load: {
            value: false
        }
        }
    },
    methods:{
        checkForm:  async function (e) {
            try {
                if (this.title && this.poster && this.desc) {
                this.load.value = true
                console.log(this.title + " " + this.poster + " " + this.desc)
                await fetch ("http://localhost:5000/form", {
                headers:{
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({title: this.title, poster: this.poster, desc: this.desc})
            })
            this.load.value = false
            this.$router.push({ name: "grille"})
        }
      
        this.errors = [];
      
        if (!this.title) {
            this.errors.push('Titre requis.');
        }
        if (!this.poster) {
            this.errors.push("Url de l'affiche requis");
        }
        if (!this.desc) {
            this.errors.push('Synopsis requis');
        }
      
        e.preventDefault();
        } catch (error){
            console.log(error)
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
</style>

