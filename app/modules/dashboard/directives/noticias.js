eleicoes.directive('noticias', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=',
      listaSel: '='
    }, 
    templateUrl: 'modules/dashboard/directives/noticias.html' 
  }; 
});