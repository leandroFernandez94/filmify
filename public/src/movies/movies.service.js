class MoviesService{
    constructor($http){
        this.http = $http;
    }

    getMovies(params){
        return this.http.get('/movies',{params:params});
    }
}

MoviesService.$inject = ['$http'];

angular.module('movies').service('MoviesService',MoviesService);