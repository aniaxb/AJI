<template>
    <div>
        <h2>Filmy wg gatunku</h2>
        <div v-for="index in genreList" :key="index">
            <p>{{index}}</p>
            <!--  <p>{{movies[index].genres}}</p> -->
            <ol type="1">
                <li v-for="i in titleList[200]" :key="i">{{i.title}}</li>
                <!-- <li>{{movies[index].title}}</li> -->
            </ol>
        </div>
        
       
        <!-- <p>Animated</p>
    <ol type="1">
        <li>Cheese Chasers</li>
        <li>Southbound Duckling</li>
    </ol>
    <p>Comedy</p>
        <ol type="1">
            <li>Special Delivery</li>
        </ol> -->
    </div>
    
</template>
<script>
import _ from 'lodash';
export default {
    name: "GenreList",

    props: {
      movies: Array,
      copyTable: Array
    },
    data() {
        let tableSize = this.movies.length;
        // let copyTable = _.cloneDeep(this.movies)
        return {
            genreList: _.sortBy(_.uniq(_.flatten(_.filter(
          _.map(this.movies, "genres"), _.size)))),
        titleList: [],

        tableSize,
        // copyTable
      }
    },

//     methods: {
//        countUnique: function() {
//         const uniqueCount = new Set(this.movies).size;
//         return uniqueCount;
//        },
//        getNumOfOccurr: function(id, arr) {
//         let occurr = 0;

//         for(let i=0; i < arr.length; i++) {
//             if('id' in arr[i] && arr[i].id === id) occurr ++; 
//         }

//         return occurr;
//        },
//        moviesByGenres: function (moviesList, genreList) {
//         return moviesList.filter((m) => {
//         return genreList.every((g) => m.genre.includes(g));
//   });
//     },

    mounted() {
        for (let it of this.genreList) {
        this.titleList.push(_.filter(
          this.movies.slice(800, 1000), (o) => _.includes(_.flatten(o.genres), it)))
      }

    },
}
</script>