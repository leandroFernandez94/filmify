movies = angular.module('movies',['ui.router']);

movies.component('appMovies',{
  template:
  `
  Movies
  `
})


movies.config(($stateProvider,$urlRouterProvider) => {
  $stateProvider.state('movies',{
    url:'/movies',
    template:'<app-movies></app-movies>'
  });

  $urlRouterProvider.otherwise('/movies');
});
