class MoviesService{
    constructor($http){
        this.http = $http;
    }

    getMovies(item){
        return this.http.get('/movies',{params:{item:item}});
    }
}

MoviesService.$inject = ['$http'];

angular.module('movies').service('MoviesService',MoviesService);