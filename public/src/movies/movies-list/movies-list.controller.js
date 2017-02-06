class MoviesList{
  constructor(){
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
  }
}

angular.module('movies.moviesList').controller('appMoviesListController',MoviesList);