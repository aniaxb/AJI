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
export default {
    name: "GenreList",

    props: {
      movies: Array,
    },
    data() {

        return {
            genreList: _.sortBy(_.uniq(_.flatten(_.filter(
          _.map(this.movies, "genres"), _.size)))),
        titleList: [],
      }
    },

    mounted() {
        for (let it of this.genreList) {
        this.titleList.push(_.filter(
          this.movies.slice(800, 1000), (o) => _.includes(_.flatten(o.genres), it)))
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