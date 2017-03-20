package com.watkings.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="matches")
public class Match implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique=true, nullable=false)
	private Long id;

	@ManyToOne
	@JoinColumn(name="COURT_ID")
	private Court court;

	@Column(name="IS_FINISHED")
	private byte isFinished;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="MATCH_DATE")
	private Date matchDate;

	@Column(name="ROUND_NUMBER")
	private int roundNumber;

	@Column(name="LEAGUE_ID")
	private Long league;

	@ManyToOne
	@JoinColumn(name="REFEREE_ID", nullable=false)
	private Referee referee;

	@Column(name="TEAM_HOME_ID", nullable=false)
	private Long team1;

	@Column(name="TEAM_AWAY_ID", nullable=false)
	private Long team2;

	@OneToMany(mappedBy="match")
	private List<MatchEvent> matchEvents;

	public Match() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Court getCourtId() {
		return this.court;
	}

	public void setCourtId(Court courtId) {
		this.court = courtId;
	}

	public byte getIsFinished() {
		return this.isFinished;
	}

	public void setIsFinished(byte isFinished) {
		this.isFinished = isFinished;
	}

	public Date getMatchDate() {
		return this.matchDate;
	}

	public void setMatchDate(Date matchDate) {
		this.matchDate = matchDate;
	}

	public int getRoundNumber() {
		return this.roundNumber;
	}

	public void setRoundNumber(int roundNumber) {
		this.roundNumber = roundNumber;
	}

	public Long getLeague() {
		return this.league;
	}

	public void setLeague(Long league) {
		this.league = league;
	}

	public Referee getReferee() {
		return this.referee;
	}

	public void setReferee(Referee referee) {
		this.referee = referee;
	}

	public Long getTeam1() {
		return this.team1;
	}

	public void setTeam1(Long team1) {
		this.team1 = team1;
	}

	public Long getTeam2() {
		return this.team2;
	}

	public void setTeam2(Long team2) {
		this.team2 = team2;
	}

	public List<MatchEvent> getMatchEvents() {
		return this.matchEvents;
	}

	public void setMatchEvents(List<MatchEvent> matchEvents) {
		this.matchEvents = matchEvents;
	}

	public MatchEvent addMatchEvent(MatchEvent matchEvent) {
		getMatchEvents().add(matchEvent);
		matchEvent.setMatch(this);

		return matchEvent;
	}

	public MatchEvent removeMatchEvent(MatchEvent matchEvent) {
		getMatchEvents().remove(matchEvent);
		matchEvent.setMatch(null);

		return matchEvent;
	}
}
