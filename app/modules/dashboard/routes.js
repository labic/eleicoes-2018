(function () {
  'use strict';
  angular
    .module('eleicoes.dashboard')
    .config(function ($stateProvider) {
      $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          views: {
            '': { 
              templateUrl: 'modules/dashboard/views/index.html',
              controller: 'main'
            }
          }
      })

        .state('dashboard/noticia', {
          url: '/dashboard/noticia',
          views: {
            '': { 
              templateUrl: 'modules/dashboard/views/indexContent.html',
              controller: 'main'
            }
          }
      })
     
  });

})();
