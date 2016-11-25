/**
 * @author gustavooliveira
 * created on 09.11.2016
 */
(function () {
  'use strict';

	angular.module('BlurAdmin.pages.regras')
	.controller('RegrasPageCtrl', ['fileReader','$scope','$http', RegrasPageCtrl]);

	function RegrasPageCtrl(fileReader, $scope, $http) {
		var texto = "TESTANDO REGRAS";

		var url = 'http://git.epol.splab.ufcg.edu.br/api/v3/projects/10/repository/files?file_path=regrasdesign.js&ref=master&private_token=6Ks-aPM_Dv34AYga2gWv'

		$scope.request_content = '';

		$http.get(url, {cache: true}).success(function(data){
			$scope.request_content = data.content;
			var regras_json = b64_to_utf8($scope.request_content);
  			$scope.regras = JSON.parse(regras_json);
		});


	function b64_to_utf8( str ) {
   	 return decodeURIComponent(escape(window.atob( str )));
	};

	}
 })();