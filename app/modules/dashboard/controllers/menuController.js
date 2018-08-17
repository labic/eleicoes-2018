angular
    .module('eleicoes.dashboard')
    .controller('menuController', [ '$scope','$location', function ($scope, $location) {

    $scope.produto = '';
    $scope.midia = '';
     
    $scope.mudarExibicao = function (type) {
      //definir se exibição das notícias será com ou sem imagem
      $location.search().exibicao = type === 0 ? 'Lista' : 'ComImagens';

      // if(Object.keys($location.search()).length === 0) {
      //   //temos que adicionar o parametro de lista na pagina
      //   location.href = window.location.href + '?exibicao=Lista';
      // } else if($location.search().exibicao === undefined) {
      //           location.href = window.location.href + '&exibicao=Lista';
      //     } else if ($location.search().exibicao === 'ComImagens') {
      //       //substituir apenas o modo de exibicao
      //           location.href = window.location.href.replace('ComImagens','Lista');
      //         } else {
      //             location.href = window.location.href.replace('Lista','ComImagens');
      //           };
    };

    $scope.atualiza = function (produto,midia) {
        var query = '?';
      //tratar data primeiro
      data1 = document.getElementById("picker1").value;
      data2 = document.getElementById("picker2").value;

      if((data1 != '')&&(data2 != '')) {
          query = query + 'data=' + data1 + 'I' + data2 + '&';
      };

      //verifica a pesquisa por produto
      if((produto != undefined)&&(produto != '')) {
          query = query + 'tagP=' + produto + '&';
      }

      //verifica a pesquisa por categoria
      if((midia != undefined)&&(midia != '')) {
          query = query + 'tagC=' + midia+ '&';
      }

      if(($location.search().exibicao != undefined)&&($location.search().exibicao != ''))
        query = query.concat('exibicao=',$location.search().exibicao,'&');

      //remove o último caractere
      query = query.substring(0,query.length-1);

      location.href = window.location.href.split('?')[0] + query;
      location.reload();

    };

    $scope.tipoMidia = [
     // {
     //  label:'Sites'
     // },
     // {
     //  label:'Impresso'
     // },
      {
      label:'Vídeo',
      value:'video'
     },
      {
      label:'Áudio',
      value:'audio'
     }
    ];

    //função para o menu de filtros chamar a página
    $scope.setValues = function() {
        var query = $location.search();
        //verifica se existe pesquisa
        if(Object.keys(query).length === 0) {
          //não precisa atualizar nenhum valor de filtro
            return;
        };

        if((query.data != undefined)&(query.data != '')) {
            //mostrar valor do produto pesquisado
            document.getElementById("picker1").value = query.data.split('I')[0];
            document.getElementById("picker2").value = query.data.split('I')[1];
        };

       
        //verifica a pesquisa por produto
        if((query.tagP != undefined)&(query.tagP != '')) {
            //mostrar valor do produto pesquisado
            $scope.produto = query.tagP;
        };
        
        //verifica a pesquisa por categoria
        if((query.tagC != undefined)&(query.tagC != '')) {
            //mostrar valor do categoria pesquisado
            $scope.midia = query.tagC;
        };

    };

    $scope.cleanFilter = function () {
      location.href = window.location.href.split('?')[0];
      location.reload();
    };

    }]);
