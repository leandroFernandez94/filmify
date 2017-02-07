var appSearchTable = {
  bindings:{
    type: '@',
    list: '<'
  },
  template:`
  <div class="container">
    <div class="separator"/>
    <div class="row">  
      <div class="col-md-10 col-md-offset-1">
        <table class="table table-bordered table-hover">
          <tr>
            <th ng-repeat="row in $ctrl.rows">{{row.name}}</th>
          </tr>
          <tr class="movies-row" ng-repeat="item in $ctrl.list">
            <td ng-repeat="row in $ctrl.rows">
              <a ng-if="row.list" ng-repeat="elem in item[row.filter] track by $index"> {{elem}} </a>
              <p ng-if="!row.list">{{item[row.filter]}}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>  
  </div>
  `,
  controller:'SearchTableController'
};


angular.module('searchtable').component('appSearchTable',appSearchTable);