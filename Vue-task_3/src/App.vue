<template>
  <div class="container">
    <h1>Baza Filmów</h1>
    <SearchInputVue/>
  <TableMovies :movies="fullMoviesData"/>
    <!-- <ListaFilmow :movies="fullMoviesData"/> -->
    <GenreList :movies="fullMoviesData"/>
    <CastList :movies="fullMoviesData"/>
    
  </div>
</template>

<script>
import GenreList from './components/GenreList.vue';
// import ListaFilmow from './components/ListaFilmow.vue'
import SearchInputVue from './components/SearchInput.vue';
import TableMovies from './components/TableMovies.vue';
import moviesjson from "./movies.json";
import CastList from './components/CastList.vue';
// import _ from "lodash";

export default {
  name: 'App',
  components: {
    // ListaFilmow,
    SearchInputVue,
    TableMovies,
    GenreList,
    CastList
},
data() {
      return {
        // filteredJsonData: _.cloneDeep(this.fullJsonData),
        fullMoviesData: moviesjson
      }
    }
}
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
