eleicoes.controller('main', function ($scope, $http, settings, $uibModal) {

	//pega as configurações de arquivo
	$scope.config = {
		//filter: settings.get('dashboard.filters')
  };
  $scope.url = 'https://inep-hash-data-api-dev.herokuapp.com/articles';
  $scope.keywords = [];
  $scope.dados = [];
  $scope.quant = 10;
  $scope.numPage = 1;
  $scope.noticiaSelecionada = [];

  //pegando todos os dados
  $scope.loadData = function(keywords,data) {
    var params;

    if(keywords.length > 1){
        if(data != undefined) {
            data = data.replace('I','/');
            params = {'per_page':$scope.quant,'page':$scope.numPage, 'filters[keywords]':keywords, 'filters[datePublished]':data};
        } else {
            params = {'per_page':$scope.quant,'page':$scope.numPage, 'filters[keywords]':keywords};
        }
    } else {
        if(data != undefined) {
            data = data.replace('I','/');
            params = {'per_page':$scope.quant,'page':$scope.numPage, 'filters[datePublished]':data};
        } else {
        params = {'per_page':$scope.quant,'page':$scope.numPage};
        }
    };


    $http({
        url: $scope.url,
        method:'GET',
        params:params
        //cache: true
    })
    .then(function (response) {
        $scope.dados = response.data.data;
    },
    function (err) {
        console.log("Notícia não encontrada");
        document.getElementById('notNovas').innerHTML ="<h1><b>Erro ao carregar conteúdo</b></h1><br><br><a href='#/dashboard' onclick='javascript:location.reload();'>Página inicial</a>";
    });
  };

	//teste de botões com ng-click
	$scope.cliquei = function(msg) {
		alert('eae cara! eu sou o '+msg);
	};

	$scope.open = function (size, template,obj) {

		var modalInstance = $uibModal.open({
			templateUrl: template,
			controller: 'MenuSup',
			size: size,
			resolve: {
				obj: function () {
					return obj;
				}
			}
		});
		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		});
	};

	$scope.selectObject = function (obj) {
		if($scope.selected.indexOf(obj) < 0)
			$scope.selected.push(obj);
		else
			$scope.selected.splice($scope.selected.indexOf(obj),1);
	};

	$scope.excluirObj = function() {
		//excluir vários objs
		if($scope.selected.length >1) {
			var decisao = confirm("Deseja mesmo excluir estes objetos?");
			if (decisao) {
				$scope.selected.forEach( function (item,index) {
					$scope.arquivos.splice($scope.arquivos.indexOf($scope.selected[index]),1);
					//enviar request pro servidor
				});

				$scope.selected = [];
			};
		} else {
		//excluir um obj
			var decisao = confirm("Deseja mesmo excluir este objeto?");
			if (decisao) {
				$scope.arquivos.splice($scope.arquivos.indexOf($scope.selected[0]),1);
				$scope.selected = [];
				//enviar request pro servidor
			};
		};

	};

	//menu da dashboard
	$scope.menuDashboard = 
	[
		{
			label: 'Nova pasta',      // menu option label
			onClick: function ($event) {
			$scope.open('sm','modules/repositorio/views/partials/nova_pasta.html')}   // on click handler
		},
		{
			label: 'Nova coleta',
			onClick: function ($event) {
				$scope.open('sm','modules/repositorio/views/partials/nova_coleta_escolha.html')}
		},
		{
			label: 'Nova estratégia',
			onClick: function ($event) {
				$scope.open('sm','modules/repositorio/views/partials/nova_visualizacao.html')}
		},
		// {
		// 	divider: true       // will render a divider
		// },
		{
			label: 'Nova estatística',	//falta atualizar com o layout
			onClick: function ($event) {
				$scope.open('sm','modules/repositorio/views/partials/nova_visualizacao.html')}
		}
	];

	$scope.filter = {
		dataInicio: undefined,
		dataFim: undefined,
		tipo: undefined
	};

	// Watch assiste a todos os filtros presentes na página esperando alguma alteração.
	$scope.$watch('filter', function (newFilter, oldFilter) {

		$(".dashboard").scrollTop("slow");
		$scope.countpage = 0;

		// //filtro de path para requisicao
		// if (newFilter.path != oldFilter.path) {
			
		// }

		if ($scope.startPage == 1) {
			//carregar itens da primeira página
			$scope.startPage = 0;
		} else {

			if ((newFilter.status != oldFilter.status) || (newFilter.ordem != oldFilter.ordem)) {
				//$scope.loadItems(newFilter.status, newFilter.ordem, undefined);
			}
			if (newFilter.name != oldFilter.name) {
				//$scope.loadItems(newFilter.status, newFilter.ordem, newFilter.name);
			}
		}

	}, true);

	/*************** Funções de tratamento ***************/

	$scope.loading = function (divId, divResult) {
		$("#loading" + divId).show();
		$("#error" + divId).hide();
		$("#empty" + divId).hide();
		$("#" + divResult).hide();
	}

	$scope.sucess = function (divId, divResult) {
		$("#loading" + divId).hide();
		$("#" + divResult).show();
	}

	$scope.empty = function (divId) {
		$("#loading" + divId).hide();
		$("#empty" + divId).show();
	}

	$scope.error = function (divId) {
		$("#loading" + divId).hide();
		$("#error" + divId).show();
	}
});