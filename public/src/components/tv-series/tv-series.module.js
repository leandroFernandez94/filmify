angular.module('tv.series',['ui.router'])
.config(($stateProvider) => {
  $stateProvider.state('tvSeries',{
    url:'/tv-series',
    template:'<app-tv-series></app-tv-series>'
  });
});

