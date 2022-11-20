<template>
   <form >
        <div class="form-group">
            <label for="titleInput">Tytuł</label><br>
            <input class="form-control" type="text" v-model="title" id="titleInput" placeholder="Podaj tytuł lub fragment tytułu filmu">
        </div>
        <div class="form-group row">
            <div class="col-sm-4">
                <label for="startYear">Rok produkcji od:</label>
            </div>
            <div class="col-sm-8">
                <input class="form-control" type="number" v-model="startYear" id="startYear" placeholder="Liczba naturalna z przedziału 1900-2019" min="1900" max="2019">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-4">
                <label for="endYear">Rok produkcji do:</label>
            </div>
            <div class="col-sm-8">
                <input class="form-control" type="number" v-model="endYear" id="endYear" placeholder="Liczba naturalna z przedziału 1900-2019" min="1900" max="2019">
            </div>
        </div>
        <div class="form-group">
            <label for="cast">Obsada</label><br>
            <input class="form-control" type="text" v-model="cast" id="cast" placeholder="Imię i nazwisko">
        </div>
        <div class="form-group row">
            <input type="button" v-on:click="$emit('filter-data', this.title, this.startYear, this.endYear, this.cast)" class="btn btn-info col-sm-12" value="Szukaj"/>
        </div>
   </form>
        
</template>

<script>
export default{

    name: "SearchInput",
    emits: ['filter-data'],

    data() {
        return {
            title: "",
            startYear: "",
            endYear: "",
            cast: ""
        }
    },
   
}

</script>

<style scoped>


</style>