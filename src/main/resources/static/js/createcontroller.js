
app.controller('createController', function($scope, $http, $location,
		appService) {

	$scope.create = function(){
		
		if(appService.zalogowany=="YES"){
			$location.path("/create");
		}
	}

	$scope.submitTeam = function() {
		if(idTeam.value!= undefined){
			$http.post(
					url = 'http://localhost:2990/update-team/' + idTeam.value + "/"+ nazwaTeam.value + "/"+ ligaTeam.value + "/"+ captainTeam.value).
					success(function(data) {
						$scope.info = "Dodano team";
			}).error(function(data) {
				$scope.info = " Nie Dodano teamu";
			});
		}
		else{
			$http.post(
					url = 'http://localhost:2990/add-team/' + nazwaTeam.value + "/"+ ligaTeam.value + "/"+ captainTeam.value).
					success(function(data) {
						$scope.info = "Dodano team";
			}).error(function(data) {
				$scope.info = " Nie Dodano teamu";
			});
		}
	
	}
	
	$scope.submitMecz = function() {
				
		var dane = {
				 'isFinished' : "true" ,
				'matchDate' : $scope.dataMecz ,
				'team1Id' : $scope.team1Mecz , 
				'team2Id' : $scope.team2Mecz 
				 }
		
		if($scope.idMecz!= ""){
		
			$http.post(
					'http://localhost:2990/update-match/' + $scope.idMecz + '',dane
					).success(function(data) {
						$scope.info = "update-match";
			}).error(function(data) {
				$scope.info = " Nie update-match";
			});
		}
		else{
			$http.post(
					 'http://localhost:2990/add-match/',dane 
					 ).	success(function(data) {
						$scope.info = "Dodano add-match";
			}).error(function(data) {
				$scope.info = " Nie add-match";
			});
		}


	}
	    
	$scope.submitEvent = function() {

		$http.post(
				url = 'http://localhost:2990/insert/wynik/' + idEvent.value + "/" + idTeamuEvent.value + "/"+ minutaEvent.value + "/"+ typEvent.value + "/"+ zawodnikEvent.value + "/"+ wartoscEvent.value + "/" + zawodnikEvent.value).
				success(function(data) {
					$scope.info = "Dodano Wynik";
		}).error(function(data) {
			$scope.info = " Nie Dodano wyniku";
		});
	}
	
	$scope.submitPilkarz= function() {
		
		var dane = {
				 'name' : $scope.imiePilkarz + " " + $scope.nazwiskoPilkarz, 
				'nationality' : $scope.narodowscPilkarz ,
				'position' : $scope.pozycjaPilkarz , 
				'teamId' : $scope.teamPilkarz 
				 }
		
		if($scope.idPilkarz!= "" )
			{					
			$http.post(
					 'http://localhost:2990/update-player/' + $scope.idPilkarz +'',	dane
					).success(function(data) {
						$scope.info = "Dodano Pilkarz";
					}).error(function(data) {
						$scope.info = " Nie Dodano Pilkarz";
					});			
			}
		else{
			$http.post(
					'http://localhost:2990/add-player/',dane
					).success(function(data) {
						$scope.info = "Dodano Pilkarz";
			}).error(function(data) {
				$scope.info = " Nie Dodano Pilkarz";
			});
		}
		
	}

});