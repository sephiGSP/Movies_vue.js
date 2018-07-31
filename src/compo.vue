<template>
    <div>
        <!-- <span :src= "title">{{title}}</span> -->
        <Movie v-for="(movie, index) in movies"
        :key = 'index'
        :title="movie.title"
        :src="getImgUrl(movie)"
        >
        {{title}}
        </Movie>
    </div>
</template>

<script>
export default {
    name: "compo",
    props: {
        title: {type: String, required: true}
    },
    data(){
        return {
            movies: [
                {title: 'title', url: 'url'}
            ]
        }
    },
    async created(){
        this.movies = []
    },
    methods: {
        getImgUrl (movie){
            return "/images/$(movie.url)"
        }
    }
}
</script>
