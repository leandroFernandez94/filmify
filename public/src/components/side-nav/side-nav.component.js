angular.module('sideNav').component('appSideNav',{
  template:
  `
    <div class="side-nav">
      <div class="separator">
        <div class="row">
          <div class="col-md-12 col-side">
              <div class="row" ng-repeat="link in $ctrl.menuLinks">
                <a class="side-nav-link" ui-sref="{{link.state}}">{{link.label}}</a>
              </div>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  `,
  controller:'SideNavController'
});
