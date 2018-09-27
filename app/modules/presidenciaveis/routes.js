(function () {
  'use strict';
  angular
    .module('eleicoes.presidenciaveis')
    .config(function ($stateProvider) {
      $stateProvider
        .state('presidenciaveis', {
          url: '/presidenciaveis',
          views: {
            '': { 
              templateUrl: 'modules/presidenciaveis/views/index.html',
              controller: 'mainP'
            }
          }
      })
     
  });

})();
