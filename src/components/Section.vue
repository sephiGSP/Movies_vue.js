<template>
    <section>
        <Affiche/>
        <Affiche/>
        <Affiche/>
        <Affiche/>
        <Affiche/>
    </section>
</template>

<script>
import Affiche from './Affiche.vue'
export default {
    name: "Sec",
    components: {
    Affiche
  },
  props: {
      affiches: Array
  }
}
</script>

<style lang="less" scoped>
section{
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-weight: bold;
    margin-left: 100px;
}

@media screen and (max-width: 350px){
    section{
        flex-direction: column;
    }
}

@media screen and (max-width: 751px) and (min-width: 351px){
    section{
        flex-direction: column;
    } 
}
</style>


