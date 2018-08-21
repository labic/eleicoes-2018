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
		profileType: 'page',
		actor: $scope.config.filter.actors[0].tag,
		word: undefined,
		theme: undefined,
		tag: undefined,
		page: 1,
		per_page: 25,
		images: true,
		limit: 25
	};

	$http({
        url: $scope.url,
        method:'GET',
        params:{
			time:$scope.filter.time,
			keyword:$scope.filter.actor
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
	$scope.loadData = function() {
		var params = {
			time:$scope.filter.time,
			keyword:$scope.filter.actor
		}


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

	$scope.adicionaNoticia = function (data) {
        //verifica se a notícia já não foi adicionada
        if($scope.noticiaSelecionada.indexOf(data)<0){
            $scope.noticiaSelecionada.push(data);
        }
        else {
            $scope.noticiaSelecionada.splice($scope.noticiaSelecionada.indexOf(data),1);
        }
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

	
	$scope.geraRelatorio = function () {
        document.getElementById('modalTitle').innerHTML = 'Relatório customizado';
        var conteudo='';
        var angularDateFilter = $filter('date');
        //percorre todas as notícias selecionadas
        for (index = 0; index < $scope.noticiaSelecionada.length; ++index) {
            conteudo = conteudo.concat('<h4><b>',$scope.noticiaSelecionada[index].headline,'</b></h4><br>');
            conteudo = conteudo.concat('Publicado em ',angularDateFilter($scope.noticiaSelecionada[index].datePublished, "dd/MM/yyyy 'às' HH'h'mm'",'UTC-4'),'<br>');
            conteudo = conteudo.concat('Link interno: https://hash-inep.labic.net/#/dashboard/noticia?id=',$scope.noticiaSelecionada[index].id,'<br>');
            conteudo = conteudo.concat('Link externo: ',$scope.noticiaSelecionada[index].url,'<br><br>');
        }
        document.getElementById('modalBody').innerHTML = conteudo;
        document.getElementById('abrirModal').style.display="block";
        document.getElementsByClassName('navbar')[0].style.zIndex = '0';
    
    };

	// Watch assiste a todos os filtros presentes na página esperando alguma alteração.
	$scope.$watch('filter', function (newFilter, oldFilter) {

		$(".dashboard").scrollTop("slow");
		$scope.countpage = 0;

		if (newFilter.time != oldFilter.time) {
			$scope.loadData();
		}
		if (newFilter.actor != oldFilter.actor) {
			$scope.loadData();
		}

		if (newFilter.page != oldFilter.page) {
			//$scope.loadItems(newFilter.status, newFilter.ordem, newFilter.name);
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