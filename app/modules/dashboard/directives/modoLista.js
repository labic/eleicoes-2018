eleicoes.directive('modolista', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=',
      lista: '='
    }, 
    templateUrl: 'modules/dashboard/directives/modoLista.html' 
  }; 
});