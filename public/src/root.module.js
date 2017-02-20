angular.module('root',[
    'sideNav',
    'movies',
    'tv.series',
    'anime',
    'ngStorage'])
    .config(($localStorageProvider) => {
      $localStorageProvider.set('movies',{
        data: [
          {
            title: 'Shawshank Redemption',
            year: '1994',
            genres: ["Drama","Crime"]
          },
          {
            title: 'The Godfather',
            year: '1972',
            genres: ["Drama","Crime"]
          },
          {
            title: 'The Man from Earth',
            year: '2007',
            genres: ["Drama","Fantasy","Sci-Fi"]
          },
          {
            title: 'The Lord of the Rings: The Return of the King',
            year: '2003',
            genres:["Drama","Adventure","Fantasy"]
          }
        ]
      })
    }
);