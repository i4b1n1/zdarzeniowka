ALTER TABLE `watking_test1`.`match` 
ADD COLUMN `LEAGUE_ID` INT NULL AFTER `MATCH_DATE`,
ADD INDEX `fk_MATCH_LEAGUE_ID_idx` (`LEAGUE_ID` ASC);
ALTER TABLE `watking_test1`.`match` 
ADD CONSTRAINT `fk_MATCH_LEAGUE_ID`
  FOREIGN KEY (`LEAGUE_ID`)
  REFERENCES `watking_test1`.`LEAGUE` (`ID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `watking_test1`.`match` 
ADD COLUMN `ROUND_NUMBER` INT NULL AFTER `LEAGUE_ID`;

ALTER TABLE `watking_test1`.`team` 
ADD COLUMN `LEAGUE_ID` INT NULL AFTER `CAPITAIN_ID`,
ADD INDEX `fk_LEAGUE_ID_idx` (`LEAGUE_ID` ASC);
ALTER TABLE `watking_test1`.`team` 
ADD CONSTRAINT `fk_LEAGUE_ID`
  FOREIGN KEY (`LEAGUE_ID`)
  REFERENCES `watking_test1`.`league` (`ID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;