<template>
  <div class="container">
    <h1>Baza Filmów</h1>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <SearchInputVue/>
  <ListaFilmow/>
  </div>
 

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ListaFilmow from './components/ListaFilmow.vue'
import SearchInputVue from './components/SearchInput.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ListaFilmow,
    SearchInputVue
  }
}
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* justify-content: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
