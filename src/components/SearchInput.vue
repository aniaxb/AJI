<template>
   <form >
        <div class="form-group">
            <label for="titleInput">Tytuł</label><br>
            <input class="form-control" type="text" name="" id="titleInput" placeholder="Podaj tytuł lub fragment tytułu filmu">
        </div>
        <div class="form-group row">
            <div class="col-sm-4">
                <label for="startYear">Rok produkcji od:</label>
            </div>
            <div class="col-sm-8">
                <input class="form-control" type="number" id="startYear" placeholder="Liczba naturalna z przedziału 1900-2019">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-4">
                <label for="endYear">Rok produkcji do:</label>
            </div>
            <div class="col-sm-8">
                <input class="form-control" type="number" id="endYear" placeholder="Liczba naturalna z przedziału 1900-2019">
            </div>
        </div>
        <div class="form-group">
            <label for="cast">Obsada</label><br>
            <input class="form-control" type="text" name="" id="cast" placeholder="Imię i nazwisko">
        </div>
        <div class="form-group row">
            <button class="btn btn-info col-sm-12">Szukaj</button>
        </div>
   </form>
        
</template>

<script>

export default{
    name: "SearchInput"
}
</script>

<style scoped>


</style>