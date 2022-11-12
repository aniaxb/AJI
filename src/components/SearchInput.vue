<template>
   <form >
        <div class="form-group">
            <label for="titleInput">Tytuł</label><br>
        <input type="text" name="" id="titleInput" placeholder="Search a movie">
        </div>
        <div class="form-group">
            <label for="startYear">Rok produkcji od:</label>
        <input type="number" id="startYear" placeholder="Liczba naturalna z przedziału 1900-2019">
        </div>
        <div class="form-group">
            <label for="endYear">Rok produkcji do:</label>
        <input type="number" id="endYear" placeholder="Liczba naturalna z przedziału 1900-2019">
        </div>
        <div class="form-group">
            <label for="cast">Obsada</label><br>
        <input type="text" name="" id="cast" placeholder="Imię i nazwisko">
        </div>
        <div class="form-group row">
            <button>Szukaj</button>
        </div>
   </form>
        
</template>

<script>

export default{
    name: "SearchInput"
}
</script>

<style scoped>

button {
    /* display: inline-block; */
    width: 50%;
    background-color: #138496;
    color: white;
    text-align: center;
}
</style>