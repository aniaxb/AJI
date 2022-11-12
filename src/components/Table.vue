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
        <tr v-for="movie in movies" :key="movie.title">
          <td>
            {{movie.title}}
          </td>
          <td>
            {{movie.year}}
          </td>
          <td>
            {{movie.cast}}
          </td>
          <td>
            {{movie.genres}}
          </td>
        </tr>
      </tbody>
      </table>
    </div>
</template>

<script>
import _ from 'underscore';
export default {
  name: 'Table',
//   props: {
//     dataFromEvent: String
//   },
  data: function() {
    return {
      movies: [{
      title: "Batman",
      year: 2021,
      cast: "Robert Pattison",
      genres: "Action"
      }
      ]
    }
  },
  mounted: function() {
    this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
    this.movies = _.where(this.title,{name:"Batman"});
    });
  }
}
</script>