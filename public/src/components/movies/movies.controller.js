class MoviesController{
    constructor(MoviesService){
        this.moviesService = MoviesService;
        
        this.categorieRows = [
          {
              name:'Title',
              filter:'title'
          },
          {
              name:'Year',
              filter:'year'
          },
          {
              name:'Genres',
              filter:'genres',
              list:true
          }
        ];
    }

    $onInit(){
        this.moviesFiltered = this.moviesService.getMovies();
    }

    searchMovie(event){
        this.moviesFiltered = this.moviesService.getMovies(event.value);
    }
}

MoviesController.$inject = ['MoviesService'];

angular.module('movies').controller('MoviesController',MoviesController);