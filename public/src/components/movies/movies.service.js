class MoviesService{
  constructor($localStorage){
      this.localStorage = $localStorage;
  }

  getMovies(titleToFilter){
    let movies = this.localStorage.movies.data;
    if (titleToFilter) return movies.filter(movie => movie.title === titleToFilter)
    else return movies;
  }
    
}

MoviesService.$inject = ['$localStorage'];

angular.module('movies').service('MoviesService',MoviesService);