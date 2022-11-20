<template>
  <div class="container">
    <h1>Baza Filmów</h1>
    <TableMovies :moviesTable="moviesData" />
    <GenreList :movies="moviesData"/>
    <CastList :movies="moviesData"/>
  </div>
</template>

<script>
import GenreList from './components/GenreList.vue';
import TableMovies from './components/TableMovies.vue';
import moviesJson from "./movies.json";
import CastList from './components/CastList.vue';

export default {
  name: 'App',
  
  components: {
    TableMovies,
    GenreList,
    CastList
},
data() {
      return {
        moviesData: moviesJson
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
