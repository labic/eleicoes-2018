
eleicoes.controller('MenuSup', function ($scope, $uibModal, $uibModalInstance, obj) {

	$scope.obj = obj;

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
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

	$scope.delete = function(item){
		$scope.obj.splice($scope.obj.indexOf(item),1);
	}

	
});
