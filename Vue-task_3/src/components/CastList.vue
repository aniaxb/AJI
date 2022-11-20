<template>
    <div>
        <h2>Filmy wg obsady</h2>
        <div v-for="(item, index) in castList" :key="index">
            <p>{{item}}</p>
  
            <ol type="1">
                <li v-for="(item, index) in titleList[index]" :key="index">
                {{item.title}}
                </li>
            </ol>
        </div>
    </div>
  </template>
  
  <script>
    import _ from "lodash";
  
    const startCastList = 0;
    const endCastList = 100;
    const startTitleList = 0;
    const endTitleList = 101;
  
    export default {
      name: "CastMovieList",
  
      props: {
        movies: Array
      },
  
      data() {

        return {
          castList: _.slice(_.uniq(_.flatten(_.filter(
            _.map(this.movies, "cast"), _.size))), startCastList, endCastList),
          titleList: [],
        }
      },
  
      mounted() {
        for (let item of this.castList) {
          this.titleList.push(_.filter(
            this.movies.slice(startTitleList, endTitleList), (m) => _.includes(_.flatten(m.cast), item)))
        }
      },
      
      methods: {
      
      }
    }
  </script>
  
  <style scoped>
  p {
      font-size: 1.3em;
      font-weight: 700;
      color: #6ca7b9;
  }
  </style>
  