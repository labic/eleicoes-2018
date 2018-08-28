eleicoes.controller('main', function ($scope, $http, settings, $uibModal, $filter, $location) {

	//pega as configurações de arquivo
	$scope.config = {
		filter: settings.get('dashboard.filters')
	};
	$scope.url = 'http://209.97.130.59:4567/facedata?'
	//$scope.url = 'https://inep-hash-data-api-dev.herokuapp.com/articles';
	$scope.dados = [];
	$scope.noticiaSelecionada = [];

	$scope.filter = {
		time: $scope.config.filter.period.values[2].number,
		keyword: $scope.config.filter.keyword[0].tag,
		pag: 1,
		lim: 25,
		images: true,
		sort:$scope.config.filter.sort[3].value
	};

	$http({
        url: $scope.url,
        method:'GET',
        params:{
			time: $scope.filter.time,
			keyword: $scope.filter.keyword,
			pag: $scope.filter.pag,
			lim: $scope.filter.lim,
			sort:$scope.filter.sort
		}
        //cache: true
    })
    .then(function (response) {
        $scope.dados = response.data.data;
    },
    function (err) {
        console.log("Notícia não encontrada");
        document.getElementById('notNovas').innerHTML ="<h1><b>Erro ao carregar conteúdo</b></h1><br><br><a href='#/dashboard' onclick='javascript:location.reload();'>Página inicial</a>";
	});
	
	//pegando todos os dados
	$scope.loadData = function(filter) {
		var params = {
			time: filter.time,
			keyword: filter.keyword,
			pag: filter.pag,
			lim: filter.lim,
			sort:filter.sort
		};

		$http({
			url: $scope.url,
			method:'GET',
			params:params
			//cache: true
		})
		.then(function (response) {
			$scope.dados = response.data.data;
			if($scope.dados.length == 0){
				document.getElementById('Erro').innerHTML ="<h1><b>Nenhuma notícia encontrada para esses filtros</b></h1><br><br><a href='#/dashboard' onclick='javascript:location.reload();'>Página inicial</a>";
			}else {
				document.getElementById('Erro').innerHTML ="";
			}
		},
		function (err) {
			console.log("Nenhuma notícia encontrada");
			document.getElementById('Erro').innerHTML ="<h1><b>Erro ao carregar conteúdo</b></h1><br><br><a href='#/dashboard' onclick='javascript:location.reload();'>Página inicial</a>";
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

	$scope.adicionaNoticia = function (data) {
        //verifica se a notícia já não foi adicionada
        if($scope.noticiaSelecionada.indexOf(data)<0){
            $scope.noticiaSelecionada.push(data);
			console.log('adicionei')
        }
        else {
            $scope.noticiaSelecionada.splice($scope.noticiaSelecionada.indexOf(data),1);
        }
    };

	// $scope.excluirObj = function() {
	// 	//excluir vários objs
	// 	if($scope.selected.length >1) {
	// 		var decisao = confirm("Deseja mesmo excluir estes objetos?");
	// 		if (decisao) {
	// 			$scope.selected.forEach( function (item,index) {
	// 				$scope.arquivos.splice($scope.arquivos.indexOf($scope.selected[index]),1);
	// 				//enviar request pro servidor
	// 			});

	// 			$scope.selected = [];
	// 		};
	// 	} else {
	// 	//excluir um obj
	// 		var decisao = confirm("Deseja mesmo excluir este objeto?");
	// 		if (decisao) {
	// 			$scope.arquivos.splice($scope.arquivos.indexOf($scope.selected[0]),1);
	// 			$scope.selected = [];
	// 			//enviar request pro servidor
	// 		};
	// 	};

	// };

	
	$scope.geraRelatorio = function () {
            
    };

	// Watch assiste a todos os filtros presentes na página esperando alguma alteração.
	$scope.$watch('filter', function (newFilter, oldFilter) {

		$("#conteudo").scrollTop('slow');
		$scope.countpage = 0;

		if (newFilter.time != oldFilter.time) {
			newFilter.pag = 1;
			$scope.loadData(newFilter);
		}

		if (newFilter.keyword != oldFilter.keyword) {
			newFilter.pag = 1;
			$scope.loadData(newFilter);
		}

		if (newFilter.pag != oldFilter.pag) {
			$scope.loadData(newFilter);
		}

		if (newFilter.sort != oldFilter.sort) {
			newFilter.pag = 1;
			$scope.loadData(newFilter);
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