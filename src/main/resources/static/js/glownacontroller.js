
app.controller('glownaController',function($scope, $http, $location, appService) {

	var newsNumber = 100;
	$http.get(
			$location.protocol() + '://'+ $location.host() +':'+  $location.port() + '/' + '/news/get/'+ newsNumber + '').success(
			function(data) {
				$scope.info = "Pobrano news/ ";
				$scope.news = data;
			}).error(
			function(data) {
				$scope.info = " Error news/ ";
			});


	
	
	
});
