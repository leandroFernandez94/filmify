var rootComponent = {
  template: `<div>
              <app-side-nav></app-side-nav>
              <div class="app-area">
                <div ui-view></div>
              </div>
             </div>`
};

angular.module('root').component('root', rootComponent);
