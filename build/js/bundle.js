(function(angular){
'use strict';
angular.module('anime',['ui.router'])
  .config(($stateProvider) => {
    $stateProvider.state('anime',{
      url:'/anime',
      template:'<app-anime></app-anime>'
    });
  });
})(window.angular);
(function(angular){
'use strict';
angular.module('movies',['ui.router'])
  .config(($stateProvider,$urlRouterProvider) => {
    $stateProvider.state('movies',{
      url:'/movies',
      template:'<app-movies></app-movies>'
    });

    $urlRouterProvider.otherwise('/movies');
  });
})(window.angular);
(function(angular){
'use strict';
angular.module('sideNav',[]);
})(window.angular);
(function(angular){
'use strict';
angular.module('tv.series',['ui.router'])
  .config(($stateProvider) => {
    $stateProvider.state('tvSeries',{
      url:'/tv-series',
      template:'<app-tv-series></app-tv-series>'
    });
  });
})(window.angular);
(function(angular){
'use strict';
angular.module('anime').component('appAnime',{
  template:
  `
  Anime
  `
});
})(window.angular);
(function(angular){
'use strict';
angular.module('movies').component('appMovies',{
  template:
  `
  Movies
  `
});
})(window.angular);

(function(angular){
'use strict';
angular.module('sideNav').component('appSideNav',{
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
})(window.angular);
(function(angular){
'use strict';
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
    ];
  }
}

angular.module('sideNav').controller('SideNavController',SideNavController);
})(window.angular);
(function(angular){
'use strict';
angular.module('tv.series').component('appTvSeries',{
  template:
  `
  TV Series
  `
});
})(window.angular);
(function(angular){
'use strict';
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/index.html','<!DOCTYPE html><html><head><meta charset="utf-8"><title>Filmify</title><!--stylesheets--><link rel="stylesheet" type="text/css" href="/css/app.css"><!--app scripts--><script src="/js/vendor.js"></script><script src="/js/bundle.js"></script></head><body ng-app="root" ng-strict-di><root></root></body></html>');}]);})(window.angular);
//# sourceMappingURL=maps/bundle.js.map
(function(angular){
  'use strict';
  angular.module('root',['templates','sideNav','movies','tv.series','anime']);
})(window.angular);
(function(angular){
'use strict';
var rootComponent = {
  template: `<div>
              <app-side-nav></app-side-nav>
              <div class="app-area">
                <div ui-view></div>
              </div>
             </div>`
};

angular.module('root').component('root', rootComponent);
})(window.angular);
