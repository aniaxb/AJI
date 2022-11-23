<template>

  <SearchInput @filter-data="filterTable"/>

  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th> 
          <th>Production Year</th>
          <th>Cast</th> 
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in getMovies()" :key="movie">
          <td id="title">{{movie.title}}</td>
          <td id="year">{{movie.year}}</td>
          <td id="cast">{{movie.cast.toString().split(", ").join("\n")}}</td>
          <td id="genres">{{movie.genres.toString().split(", ").join("\n")}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button  class="btn btn-dark btn-block " v-on:click="expandTable">
        <!-- v-if="showButton" -->
        Wyświetl więcej
      </button>
    </div>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue';
import _ from "lodash";

export default {
    name: "TableMovies",
    components: { 
      SearchInput 
    }, 
    props: {
        moviesTable: Object
    },

    mounted() {
      this.movies = this.moviesTable
    },
    
    data() {
      // let showButton = true;
      return {
        movies: [],
        tableSize: 10,
        expandBy: 10,
        // showButton
    }
  },

    methods: {

getMovies() {
  return this.movies.slice(0 ,this.tableSize);
},

expandTable() {
  if(this.movies.length + this.expandBy <= this.tableSize){
    this.tableSize = this.movies.length;
    // this.showButton = false;
  }
  else {
    this.tableSize += this.expandBy;
    // this.showButton = true;
  }
  
},

filterTable(titleInput, startYearInput, endYearInput, castInput) {

  this.movies = this.moviesTable;

  let includedTitle = function() {return true};
  let includedCast = function() {return true};
  let includedYearStart = function() {return true};
  let includedYearEnd = function() {return true};
  let includedYearBetween = function() {return true};

  if(titleInput === "" && startYearInput === "" && endYearInput === "" && castInput === "") {
    return
  }

  if(titleInput !== ""){
    includedTitle = function(filter, movie) {
      return movie['title'].toLowerCase().includes(filter.toLowerCase())
    }
  }

  else if(startYearInput !== "" && endYearInput === ""){
    includedYearStart = function(startYear, movie) {
      return movie['year'] >= startYear
    }
  }
  else if(endYearInput !== "" && startYearInput === ""){
    includedYearEnd = function(endYear, movie) {
      return movie['year'] <= endYear
    }
  }
   else if(startYearInput !== "" && endYearInput !== "" && startYearInput < endYearInput) {
    includedYearBetween = function(startYear, endYear, movie) {
      return movie['year'] >= startYear && movie['year'] <= endYear
    }
  }
    
  else if(castInput !== ""){
    includedCast = function(filter, movie) {
      return _.find(movie['cast'], cast => {
        return cast.toLowerCase().includes(filter.toLowerCase())
      })
  }
}  
else return

  this.movies = _.filter(this.moviesTable, movie => {
  return includedTitle(titleInput, movie) && includedCast(castInput, movie) && includedYearStart(startYearInput, movie) && includedYearEnd( endYearInput, movie) && includedYearBetween(startYearInput, endYearInput, movie)
  });

}

}

}
</script>

<style scoped>
  td {
    padding: 0.5rem !important;
  }
  #year, #genres, #cast {
    text-align: center;
  }
  th {
    padding: 1em !important;
  }
</style>