eleicoes.directive('relatorio', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '='
      }, 
      templateUrl: 'modules/dashboard/directives/relatorio.html' 
    }; 
  });