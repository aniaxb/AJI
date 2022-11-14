<template>
    <div class="row px-1">
      <!-- :key IS BEST WAY TO FORCE COMPONENT TO RERENDER -->
      <TableMovies
          class="col-md-12 mt-5 px-2"
          :movies="filteredJsonData"
          :key="reRenderedKey"
      />
    </div>
  </template>
  
  <script>
    import _ from "lodash";
    import TableMovies from "./TableMovies.vue";
  
    export default {
      name: "JustTable",
  
      components: {
        TableMovies
      },
  
      props: {
        fullJsonData: Array
      },
  
      data() {
        return {
          reRenderedKey: 0,
          filteredJsonData: _.cloneDeep(this.fullJsonData),
          searchProperties: {
            title: "",
            dateFrom: "",
            dateTo: "",
            cast: "",
            genres: "",
          },
        }
      }
  
    }
  </script>
  
  <style scoped>
    .padding-table {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  
    @media (min-width: 576px) {
      .padding-table {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }
  
    @media (min-width: 768px) {
      .padding-table {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  </style>
  