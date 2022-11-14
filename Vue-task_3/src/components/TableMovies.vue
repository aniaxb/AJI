<template>
    <div>
    <table>
      <thead>
        <tr>
          <th>
            Title
          </th> 
          <th>
            Production Year
          </th>
          <th>
            Cast
          </th> 
          <th>
            Genres
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(index, it) in tableSize" :key="it">
          <td id="title">{{movies[it].title}}</td>
          <td id="year">{{movies[it].year}}</td>
          <td id="cast">{{movies[it].cast.toString().split(",").join("\n")}}</td>
          <td id="genres">{{movies[it].genres.toString().split(",").join("\n")}}</td>
        </tr>

      </tbody>
      </table>
      <div v-if="isButtonVisible">
      <button class="btn btn-dark btn-block " v-on:click="expandTable()">
        Wyświetl więcej
      </button>
      </div>
    </div>
</template>

<script>
 const INITIAL_TABLE_SIZE = 10;

export default {
  name: 'TableMovies',

  props: {
      movies: Array,
    },

    data() {
      let tableSize = INITIAL_TABLE_SIZE;
      let isButtonVisible = true;

      if (this.movies.length < INITIAL_TABLE_SIZE) {
        tableSize = this.movies.length;
        isButtonVisible = false;
      } else {
        tableSize = INITIAL_TABLE_SIZE;
        isButtonVisible = true;
      }

      return {
        tableSize,
        isButtonVisible
      }
    },

  methods: {
      expandTable: function () {
        if (this.movies.length + INITIAL_TABLE_SIZE <= this.tableSize) {
          this.tableSize = this.jsonData.length;
          this.isButtonVisible = false;
        } else {
          this.tableSize += INITIAL_TABLE_SIZE;
          this.isButtonVisible = true;
        }
      }
    }
}
</script>

<style scoped>
  td {
    padding: 0.5rem !important;
    /* text-align: center; */
  }
  #year, #genres, #cast {
    text-align: center;
  }
  th {
    padding: 1em !important;
  }
</style>