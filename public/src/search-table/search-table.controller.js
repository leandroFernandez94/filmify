class SearchTable{
  constructor(SearchTableService){
    this.service = SearchTableService;
  }

  $onInit(){
    this.rows = this.service.types[this.type];
  }
}

SearchTable.$inject = ['SearchTableService'];

angular.module('searchtable').controller('SearchTableController',SearchTable);