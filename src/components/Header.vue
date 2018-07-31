<template>
    <header>
        <h1>Movies</h1>
        <ul id="navigation">
            <li><a href="#" title="aller à la section 1">Film à l'affiche</a></li>
            <li><a href="#" title="aller à la section 2">Prochaines Sorties</a></li>
            <li><a href="#" title="aller à la section 3">Films les mieux notés</a></li>
            <li><a href="#" title="aller à la section 5">Contact</a></li>
        </ul>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style lang="less" scoped>
header{
    height:15vh;
    background-color: yellow;
    h1 {
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    #navigation {
        margin-left: 10px;
        padding: 0 ;
        list-style: none ;
        text-align: left ;
        li {
            display: inline;
            margin-right: 1px ;
            background:yellow ;
            a {
                padding: 4px 20px ;
                background:yellow;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: bold;
                color: black;
                text-align: center ;
                text-decoration: none ;
            }
        }
    }
}

@media screen and (max-width: 350px){
    #navigation{
        display: none;
    }
}

@media screen and (max-width: 751px) and (min-width: 351px){s
    #navigation{
        display: none;
    }
}
</style>
