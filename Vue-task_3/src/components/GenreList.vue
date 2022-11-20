<template>
    <div>
        <h2>Filmy wg gatunku</h2>
        <div v-for="(item, index) in genreList" :key="index">
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
import _ from 'lodash';

    const startGenreList = 0;
    const endGenreList = 150;
    const startTitleList = 1000;
    const endTitleList = 1200;

export default {
    name: "GenreList",

    props: {
      movies: Array,
    },
    data() {

        return {
            genreList: _.slice(_.sortBy(_.uniq(_.flatten(_.filter(
          _.map(this.movies, "genres"), _.size)))), startGenreList, endGenreList),
        titleList: [],
      }
    },

    mounted() {
        for (let item of this.genreList) {
        this.titleList.push(_.filter(
          this.movies.slice(startTitleList, endTitleList), (m) => _.includes(_.flatten(m.genres), item)))
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