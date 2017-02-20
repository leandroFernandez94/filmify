angular.module('movies',[
  'ui.router',
  'searchtable',
  'searchform'])
.config(($stateProvider,$urlRouterProvider) => {
  $stateProvider.state('movies',{
    url:'/movies',
    template:'<app-movies></app-movies>'
  });

  $urlRouterProvider.otherwise('/movies');
});