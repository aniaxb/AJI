<template>
    <div class="row">
        <GenreList/>
    </div>
    <div class="row">
        <CastList/>
    </div>
    
</template>

<script>
import GenreList from './list/GenreList.vue'
import CastList from './list/CastList.vue'

export default{
    name: "ListaFilmow",
    components: {
        GenreList,
        CastList
    }
}
</script>
