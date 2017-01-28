CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `watking_prime`@`%` 
    SQL SECURITY DEFINER
VIEW `TEAMS_UNIT_POINTS` AS
    SELECT 
        `RESULTS`.`LEAGUE_ID` AS `LEAGUE_ID`,
        `RESULTS`.`TEAM_HOME_ID` AS `TEAM_ID`,
        `RESULTS`.`GOALS_HOME` AS `GOALS_SCORED`,
        `RESULTS`.`GOALS_AWAY` AS `GOALS_LOST`,
        (CASE
            WHEN (`RESULTS`.`GOALS_HOME` > `RESULTS`.`GOALS_AWAY`) THEN 3
            WHEN (`RESULTS`.`GOALS_HOME` < `RESULTS`.`GOALS_AWAY`) THEN 0
            ELSE 1
        END) AS `POINTS`
    FROM
        `RESULTS` 
    UNION ALL SELECT 
        `RESULTS`.`LEAGUE_ID` AS `LEAGUE_ID`,
        `RESULTS`.`TEAM_AWAY_ID` AS `TEAM_ID`,
        `RESULTS`.`GOALS_AWAY` AS `GOALS_SCORED`,
        `RESULTS`.`GOALS_HOME` AS `GOALS_LOST`,
        (CASE
            WHEN (`RESULTS`.`GOALS_AWAY` > `RESULTS`.`GOALS_HOME`) THEN 3
            WHEN (`RESULTS`.`GOALS_AWAY` < `RESULTS`.`GOALS_HOME`) THEN 0
            ELSE 1
        END) AS `POINTS`
    FROM
        `RESULTS`;