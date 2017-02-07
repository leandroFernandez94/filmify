class SearchFormController {
    constructor(){

    }

    search(){
        this.onSearch({
            $event:{
                value: this.searchValue
            }
        });
    }
}

angular.module('searchform').controller('SearchFormController',SearchFormController);