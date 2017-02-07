class MoviesController{
    constructor(MoviesService){
        this.moviesService = MoviesService;
    }

    $onInit(){
        this.moviesService.getMovies()
        .then(resp => this.moviesFiltered = resp.data.found);
    }

    searchMovie(event){
        console.log(event.value);
        this.moviesService.getMovies(event.value)
        .then(resp => this.moviesFiltered = resp.data.found);
    }
}

MoviesController.$inject = ['MoviesService'];

angular.module('movies').controller('MoviesController',MoviesController);