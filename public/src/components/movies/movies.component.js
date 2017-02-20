angular.module('movies').component('appMovies',{
  template:
  `
  <search-form 
              current-search = "movie"
              on-search = "$ctrl.searchMovie($event);"
  ></search-form>
  <app-search-table 
              type="movies" 
              list="$ctrl.moviesFiltered"
              categorie-rows = "$ctrl.categorieRows"
  ></app-search-table>
  `,
  controller:'MoviesController'
});