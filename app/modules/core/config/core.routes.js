(function () {
  'use strict';
  angular
    .module('eleicoes.core')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    });
})();
