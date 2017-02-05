anime = angular.module('anime',['ui.router']);

anime.component('appAnime',{
  template:
  `
  Anime
  `
})


anime.config(($stateProvider) => {
  $stateProvider.state('anime',{
    url:'/anime',
    template:'<app-anime></app-anime>'
  });
});
