class SearchTableService {
    constructor(){
        this.types = {
            movies : [
                {
                    name:'Title',
                    filter:'title'
                },
                {
                    name:'Year',
                    filter:'year'
                },
                {
                    name:'Genres',
                    filter:'genre',
                    list:true
                }
            ]
        }
    }

}

angular.module('searchtable').service('SearchTableService',SearchTableService);