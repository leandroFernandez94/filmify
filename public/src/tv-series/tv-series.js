tvSeries = angular.module('tv.series',['ui.router']);

tvSeries.component('appTvSeries',{
  template:
  `
  TV Series
  `
})


tvSeries.config(($stateProvider) => {
  $stateProvider.state('tvSeries',{
    url:'/tv-series',
    template:'<app-tv-series></app-tv-series>'
  });
});
