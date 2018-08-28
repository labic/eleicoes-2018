eleicoes.directive('noticias', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: 'modules/dashboard/directives/noticias.html' 
  }; 
});