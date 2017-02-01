var root = {
  template: `<div class="root">
              <div ui-view></div>
             </div>`
};

angular
  .module('root',['main'])
  .component('root', root);
