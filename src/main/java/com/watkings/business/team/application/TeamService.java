package com.watkings.business.team.application;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.watkings.domain.MatchByTeam;
import com.watkings.domain.MatchByTeamRepository;
import com.watkings.domain.MatchRepository;
import com.watkings.domain.PlayerRepository;
import com.watkings.domain.Team;
import com.watkings.domain.TeamRepository;
import com.watkings.utils.ProjectDateFormat;

@Component
public class TeamService {
	@Autowired
	TeamRepository teamRepository;
	@Autowired
	PlayerRepository playerRepository;
	@Autowired
	MatchRepository matchRepository;
	@Autowired
	MatchByTeamRepository matchByTeamRepository;
	@Autowired
	ProjectDateFormat dateFormat;
	
	public void updateTeam(Team team, TeamUpdateDto teamUpdateDto) {
		
		if(teamUpdateDto.getFaundationDate()!=null)
			team.setFaundationDate(teamUpdateDto.getFaundationDate(dateFormat.getSimpleDateFormat()));
		if(teamUpdateDto.getName()!=null)
			team.setName(teamUpdateDto.getName());
		if(teamUpdateDto.getCapitainId()!=null)
			team.setPlayer(teamUpdateDto.getCapitainId());
		if(teamUpdateDto.getLeagueId()!=null)
		team.setLeagueId(teamUpdateDto.getLeagueId());
		
		teamRepository.save(team);

	}
	public List<TeamBasicDto> getTeamsByLeague(int leagueId) {
		List<Team> teamsList = teamRepository.findByLeagueId(new Long(leagueId));
		List<TeamBasicDto> teamsDtoList  = new ArrayList<TeamBasicDto>();
		
		for(Team team: teamsList){
			teamsDtoList.add(new TeamBasicDto(team.getId(), team.getName()));
		}
		
		return teamsDtoList;
	}
	
	public List<MatchByTeamDto> getTeamsMatchesList(int teamId) {
		List<MatchByTeamDto> matchesDtoList = new ArrayList<MatchByTeamDto>();
		List<MatchByTeam> matchesList = matchByTeamRepository.findByTeamId(new Long(teamId));
		
		if(matchesList.isEmpty())
			return matchesDtoList;
		
		for(MatchByTeam match : matchesList){
			matchesDtoList.add(new MatchByTeamDto(match.getId().toString(),
												 match.getMatchDate().toString(), 
												 match.getRival(),
												 Integer.toString(match.getRoundNumber())));										
		}
		return matchesDtoList;
	}

	
	

}
