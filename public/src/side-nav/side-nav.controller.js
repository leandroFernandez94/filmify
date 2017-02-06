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