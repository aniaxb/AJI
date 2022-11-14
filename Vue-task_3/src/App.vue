<template>
  <div class="container">
    <h1>Baza Filmów</h1>
    <SearchInputVue/>
  <!-- <TableMoviesVue/> -->
  <!-- <TableMovies :fullJsonData="fullMoviesData"/> -->
    <JustTable :fullJsonData="fullMoviesData"/>
    <ListaFilmow/>
  </div>


</template>

<script>
import ListaFilmow from './components/ListaFilmow.vue'
import SearchInputVue from './components/SearchInput.vue';
// import TableMovies from './components/TableMovies.vue';
import JustTable from './components/JustTable.vue'
import moviesjson from "./movies.json";

export default {
  name: 'App',
  components: {
    ListaFilmow,
    SearchInputVue,
    JustTable
    // TableMovies
},
data() {
      return {
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
