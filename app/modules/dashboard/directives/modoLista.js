eleicoes.directive('modolista', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=',
      listaSel: '='
    }, 
    templateUrl: 'modules/dashboard/directives/modoLista.html' 
  }; 
});