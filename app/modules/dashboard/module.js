(function () {
  'use strict';
  angular.module('eleicoes.dashboard', [])
  .run(function (settings) {
    settings.setFromFile('dashboard.filters', '/data/dashboard.config.json');
  });
})();
