var appMoviesList = {
  template:`
  <div class="container">
    <div class="separator"/>
    <div class="row">  
      <div class="col-md-10 col-md-offset-1">
        <table class="table table-bordered table-hover">
          <tr>
            <th>Name</th>
            <th>year</th>
            <th>Genres</th>
          </tr>
          <tr class="movies-row" ng-repeat="movie in $ctrl.movies">
            <td>{{movie.name}}</td>
            <td>{{movie.year}}</td>
            <td><a ng-repeat="genre in movie.genres"> {{genre}} </a></td>
          </tr>
        </table>
      </div>
    </div>  
  </div>
  `,
  controller:'appMoviesListController'
};


angular.module('movies.moviesList').component('appMoviesList',appMoviesList);