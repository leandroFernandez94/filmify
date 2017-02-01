var appComponent = {
  template: `<div>
              <div class="row">
                <div class="col-md-6" style="border:1px;">
                  <h5>lista</h5>
                </div>
                <div class="col-md-6" style="border:1px;">
                  <h5>detalle</h5>
                </div>
              </div>
            </div>`
};


angular.module('main',['ui.router'])
  .component('app',appComponent)
  .config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        template: '<div ui-view></div>'
      })
      .state('main.app', {
        url:'/app',
        component:'app'
      });

    $urlRouterProvider.otherwise('/main/app');
  });
