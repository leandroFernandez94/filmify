class SearchFormController {
    constructor(){

    }

    search(){
        console.log(this.searchValue);
        this.onSearch({
            $event:{
                value: this.searchValue
            }
        });
    }
}

angular.module('searchform').controller('SearchFormController',SearchFormController);