
app.controller('createController', function($scope, $http, $location,
		appService) {

	$scope.create = function(){
		
		if(appService.zalogowany=="YES"){
			$location.path("/create");
		}
	}

	$scope.submitTeam = function() {

		var dane = {
				 'faundationDate' : "date" ,
				 'leagueId' : $scope.ligaTeam ,
				 'name' : $scope.nazwaTeam , 
				 'capitainId' : $scope.captainTeam 
				 }
		
		if($scope.idTeam!= ""){
			$http.post(
					'http://localhost:2990/update-team/' + $scope.idTeam + '',dane
					).success(function(data) {
						$scope.info = "update team";
			}).error(function(data) {
				$scope.info = " Nie update teamu";
			});
		}
		else{
			$http.post(
					'http://localhost:2990/add-team/',dane).
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
					 ).success(function(data) {
						$scope.info = "Dodano add-match";
			}).error(function(data) {
				$scope.info = " Nie add-match";
			});
		}


	}
	    
	$scope.submitNews = function() {

		var dane = {
				'title' : $scope.titleNews ,
				'body' : $scope.bodyNews 				
				}
		
		$http.post(
				url = 'http://localhost:2990/news/add/',dane).
				success(function(data) {
					$scope.info = "Dodano News";
		}).error(function(data) {
			$scope.info = " Nie News";
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
						$scope.info = "update Pilkarz";
					}).error(function(data) {
						$scope.info = " Nie update Pilkarz";
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
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//lISTY ROZWIJANE////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	   $scope.listLeague = {
			    availableOptions: [
			      {id: '1', name: 'Liga 1'},
			      {id: '2', name: 'Liga 2'},
			      {id: '3', name: 'Liga 3'}
			    ]
			   };
	   
	   
	   $scope.updateSelectTeam = function(option){
		   $http.get(
					'http://localhost:2990//teams/list/'+ option.id + '').success(
					function(data) {
						$scope.info = "Pobrano scorers-classification/ "
								+ $scope.selectedLieagueId;
						$scope.selectedlistTeam = data;
					}).error(
					function(data) {
						$scope.info = " Error scorers-classification/ "
								+ appService.leagueId;
					});

	   }
	   
	   $scope.updateTeam = function(data){
		   $http.get(
					'http://localhost:2990//team-info/'+ data.id + '').success(
					function(data) {
						$scope.idTeam = data.id;
						$scope.nazwaTeam =data.name;
						$scope.ligaTeam = data.leagueId;
						$scope.captainTeam = data.player;
						
						$scope.info = " http://localhost:2990//team-info/ ";
					}).error(
					function(data) {
						$scope.info = " http://localhost:2990//team-info/ ";
					});

	   }
	      
	   
	   $scope.updateSelectMatch = function(option){
		   $http.get(
					'http://localhost:2990//teams/list/'+ option.id + '').success(
					function(data) {
						$scope.info = "Pobrano scorers-classification/ "
								+ $scope.selectedLieagueId;
						$scope.selectedlistTeam = data;
					}).error(
					function(data) {
						$scope.info = " Error scorers-classification/ "
								+ appService.leagueId;
					});

	   }
	   
	   $scope.updateMatch = function(data){
		   $http.get(
					'http://localhost:2990//teams/list/'+ option.id + '').success(
					function(data) {
						$scope.info = "Pobrano scorers-classification/ "
								+ $scope.selectedLieagueId;
						$scope.selectedlistTeam = data;
					}).error(
					function(data) {
						$scope.info = " Error scorers-classification/ "
								+ appService.leagueId;
					});

	   }
	   

});