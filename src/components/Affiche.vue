<template>
    <div><img :src="src"/><p>{{title}}</p></div>
</template>

<script>
export default {
  name: 'Affiche',
  props:{
      src: String, title: String
  }
}
</script>

<style lang="less" scoped>
div{
        margin: 10px;
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
