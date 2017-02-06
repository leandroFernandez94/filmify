angular.module('anime',['ui.router'])
.config(($stateProvider) => {
  $stateProvider.state('anime',{
    url:'/anime',
    template:'<app-anime></app-anime>'
  });
});