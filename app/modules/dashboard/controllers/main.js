eleicoes.controller('main', function ($scope, $http, settings, $uibModal) {

	//pega as configurações de arquivo
	$scope.config = {
		filter: settings.get('dashboard.filters')
  };
  $scope.url = 'https://inep-hash-data-api-dev.herokuapp.com/articles';
  $scope.keywords = [];
  $scope.dados = [];
  $scope.noticiaSelecionada = [];
  
  $scope.filter = {
    time: $scope.config.filter.period.values[2].value,
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

  //pegando todos os dados
  $scope.loadData = function(keywords,data) {
    var params;

    if(keywords.length > 1){
        if(data != undefined) {
            data = data.replace('I','/');
            params = {'per_page':$scope.filter.limit,'page':$scope.filter.page, 'filters[keywords]':keywords, 'filters[datePublished]':data};
        } else {
            params = {'per_page':$scope.filter.limit,'page':$scope.filter.page, 'filters[keywords]':keywords};
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

	// Watch assiste a todos os filtros presentes na página esperando alguma alteração.
	$scope.$watch('filter', function (newFilter, oldFilter) {

		$(".dashboard").scrollTop("slow");
		$scope.countpage = 0;

		if ($scope.filter.page > 1) {
			//carregar itens da primeira página
			$scope.filter.page = 1;
		} else {

			if (newFilter.time != oldFilter.time) {
				$scope.loadItems(newFilter.status, newFilter.ordem, undefined);
			}
			if (newFilter.actor != oldFilter.actor) {
				$scope.loadItems(newFilter.status, newFilter.ordem, newFilter.name);
			}

			if (newFilter.page != oldFilter.page) {
				$scope.loadItems(newFilter.status, newFilter.ordem, newFilter.name);
			}

			if (newFilter.images != oldFilter.images) {
				$scope.loadItems(newFilter.status, newFilter.ordem, newFilter.name);
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