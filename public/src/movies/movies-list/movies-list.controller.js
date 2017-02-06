class MoviesList{
  constructor($http){
    this.$http = $http;
    /*
    this.movies = [
      {
        name:'The Man from Earth',
        year:2007,
        genres:['Drama', 'Fantasy', 'Sci-Fi']
      },
      {
        name:'Shawshank Redemption',
        year:1994,
        genres:['Crime','Drama']
      },
      {
        name:'The Godfather',
        year:1972,
        genres:['Crime','Drama']
      },
      {
        name:'The Lord of the Rings: The Return of the King',
        year:2003,
        genres:['Adventure', 'Drama', 'Fantasy']
      }
    ];
    */
  }
  
  $onInit() {
    this.$http.get('/movies')
    .then(resp => this.movies = resp.data);
  }
}

MoviesList.$inject = ['$http'];

angular.module('movies.moviesList').controller('appMoviesListController',MoviesList);