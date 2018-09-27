(function () {
  'use strict';
  angular.module('eleicoes.presidenciaveis', [])
  .run(function (settings) {
    settings.setFromFile('presidenciaveis.filters', '/data/presidenciaveis.config.json');
  });
})();
