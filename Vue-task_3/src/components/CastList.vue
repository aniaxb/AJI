<template>
    <div>
        <h2>Filmy wg obsady</h2>
        <div  v-for="(item, index) in castList" :key="index">
            <p>{{item}}</p>
  
            <ol type="1">
                <li class="list-group" v-for="(item, index) in titleList[index]" :key="index">
                {{item.title}}
                </li>
            </ol>
        </div>
    </div>
  </template>
  
  <script>
    import _ from "lodash";
  
    const BEGIN_CAST = 0;
    const END_CAST = 149;
    const BEGIN_TITLE = 1000;
    const END_TITLE = 1299;
  
    export default {
      name: "CastMovieList",
  
      props: {
        movies: Array
      },
  
      data() {
        return {
          castList: _.slice(_.uniq(_.flatten(_.filter(
            _.map(this.movies, "cast"), _.size))), BEGIN_CAST, END_CAST),
          titleList: [],
        }
      },
  
      mounted() {
        for (let it of this.castList) {
          this.titleList.push(_.filter(
            this.movies.slice(BEGIN_TITLE, END_TITLE), (o) => _.includes(_.flatten(o.cast), it)))
        }
      },
  
    }
  </script>
  
  <style scoped>
  p {
      font-size: 1.3em;
      font-weight: 700;
      color: #6ca7b9;
  }
  </style>
  