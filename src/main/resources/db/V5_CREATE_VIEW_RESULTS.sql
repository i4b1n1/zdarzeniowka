USE `watking_test1`;
CREATE  OR REPLACE VIEW `results` AS
    SELECT 
        `me`.`MATCH_ID` AS `MATCH_ID`,
        `m`.`LEAGUE_ID` AS `LEAGUE_ID`,
        `m`.`ROUND_NUMBER` AS `ROUND_NUMBER`,
        `m`.`TEAM_HOME_ID` AS `TEAM_HOME_ID`,
        SUM((CASE
            WHEN (`me`.`TEAM_ID` = `m`.`TEAM_HOME_ID`) THEN 1
            ELSE 0
        END)) AS `GOALS_HOME`,
        `m`.`TEAM_AWAY_ID` AS `TEAM_AWAY_ID`,
        SUM((CASE
            WHEN (`me`.`TEAM_ID` = `m`.`TEAM_AWAY_ID`) THEN 1
            ELSE 0
        END)) AS `GOALS_AWAY`
    FROM
        (`match_event` `me`
        LEFT JOIN `match` `m` ON ((`me`.`MATCH_ID` = `m`.`ID`)))
    WHERE
        (`me`.`EVENT_TYPE_ID` = 1)
    GROUP BY `me`.`MATCH_ID`;