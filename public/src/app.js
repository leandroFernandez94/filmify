var root = angular.module('root',['sideNav','movies','tv.series','anime']);

var rootComponent = {
  template: `<div>
              <app-side-nav></app-side-nav>
              <div class="app-area">
                <div ui-view></div>
              </div>
             </div>`
};

root.component('root', rootComponent);
