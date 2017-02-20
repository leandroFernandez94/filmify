var search = {
    bindings:{
        currentSearch: '@',
        onSearch: '&'
    },
    template:`
        <form class="navbar-form navbar-left" role="search" ng-submit="$ctrl.onSearch({$event:{value:$ctrl.searchValue}})">
            <div class="form-group">
                <input ng-model="$ctrl.searchValue" type="text" placeholder="Search for a {{$ctrl.currentSearch}}..."></input>
            </div>
            <button type="submit" class="btn btn-default">Search</button>
        </form>
    `
}


angular.module('searchform').component('searchForm',search);