eleicoes.directive('noticias', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=',
      lista: '='
    }, 
    templateUrl: 'modules/dashboard/directives/noticias.html' 
  }; 
});