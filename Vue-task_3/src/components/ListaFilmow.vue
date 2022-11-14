<template>
    <!-- <div class="row">
        <GenreList :movies="filteredJsonData"/>
    </div> -->
    <div class="row">
        <CastList/>
    </div>
    
</template>

<script>
// import GenreList from './list/GenreList.vue'
import CastList from './list/CastList.vue'
import _ from 'lodash';

export default{
    name: "ListaFilmow",
    components: {
        // GenreList,
        CastList
    },
    data() {
        return {
          filteredJsonData: _.cloneDeep(this.fullJsonData),
          }
      }

}
</script>
