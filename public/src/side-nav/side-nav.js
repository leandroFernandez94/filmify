var sideNav = angular.module('sideNav',[]);

class SideNavController{
  constructor(){
    this.menuLinks = [
      {
        label:'Movies',
        state:'movies'
      },
      {
        label:'TV Series',
        state:'tvSeries'
      },
      {
        label:'Anime',
        state:'anime'
      }
    ]
  }
}

sideNav.controller('SideNavController',SideNavController);

sideNav.component('appSideNav',{
  template:
  `
    <aside class="side-nav">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li ng-repeat="link in $ctrl.menuLinks">
              <a class="side-nav-link" ui-sref="{{link.state}}">{{link.label}}</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  `,
  controller:'SideNavController'
});
