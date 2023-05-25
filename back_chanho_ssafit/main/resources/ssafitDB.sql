

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS `ssafit` DEFAULT CHARACTER SET utf8 ;
USE `ssafit` ;

CREATE TABLE IF NOT EXISTS `ssafit`.`user` (
  `id` VARCHAR(30) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  `isAdmin` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ssafit`.`diary` (
  `diaryId` INT NOT NULL AUTO_INCREMENT,
  `part` VARCHAR(10) NOT NULL,
  `userId` VARCHAR(30) NOT NULL,
  `weight` INT NOT NULL,
  `reps` INT NOT NULL,
  `exerciseSet` INT NOT NULL,
  `updateDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `isDone` INT NOT NULL,
  PRIMARY KEY (`diaryId`),
  INDEX `userId_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_diary_userId`
    FOREIGN KEY (`userId`)
    REFERENCES `ssafit`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ssafit`.`friend` (
  `friendId` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(30) NOT NULL,
  `frienduserId` VARCHAR(30) NOT NULL,
  `isAccept` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`friendId`),
  INDEX `userId_idx` (`userId` ASC) VISIBLE,
  INDEX `frienduserId_idx` (`frienduserId` ASC) VISIBLE,
  CONSTRAINT `fk_frienduserId`
    FOREIGN KEY (`frienduserId`)
    REFERENCES `ssafit`.`user` (`id`),
  CONSTRAINT `fk_userId`
    FOREIGN KEY (`userId`)
    REFERENCES `ssafit`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;



CREATE TABLE IF NOT EXISTS `ssafit`.`alarm` (
  `AlarmId` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(30) NOT NULL,
  `alarmDate` DATETIME NOT NULL,
  `diaryId` INT NULL DEFAULT NULL,
  `friendId` INT NULL DEFAULT NULL,
  `type` TINYINT NULL DEFAULT NULL,
  `isCheck` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`AlarmId`),
  INDEX `fk_alarm_userId_idx` (`userId` ASC) VISIBLE,
  INDEX `fk_diaryId_idx` (`diaryId` ASC) VISIBLE,
  INDEX `fk_friendId_idx` (`friendId` ASC) VISIBLE,
  CONSTRAINT `fk_alarm_userId`
    FOREIGN KEY (`userId`)
    REFERENCES `ssafit`.`user` (`id`),
  CONSTRAINT `fk_diaryId`
    FOREIGN KEY (`diaryId`)
    REFERENCES `ssafit`.`diary` (`diaryId`),
  CONSTRAINT `fk_friendId`
    FOREIGN KEY (`friendId`)
    REFERENCES `ssafit`.`friend` (`friendId`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `ssafit`.`exercise` (
  `exerciseId` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NULL,
  `part` VARCHAR(10) NOT NULL,
  `youtubeId` VARCHAR(100)  NULL,
  `content` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`exerciseId`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


insert into exercise (exerciseId,`title`,`part`)VALUES (0,'풀업','등');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'바벨 로우','등');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'랫풀다운','등');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'시티드 로우','등');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'데드리프트','등');

insert into exercise (exerciseId,`title`,`part`)VALUES (0,'벤치프레스','가슴');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'인클라인 프레스','가슴');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'딥스','가슴');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'체스트 프레스','가슴');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'펙 덱 플라이','가슴');

insert into exercise (exerciseId,`title`,`part`)VALUES (0,'오버 헤드 프레스','어깨');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'숄더 프레스','어깨');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'사이드 레터럴 레이즈','어깨');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,' 페이스 풀','어깨');


insert into exercise (exerciseId,`title`,`part`)VALUES (0,'스쿼트','하체');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'오버 헤드 프레스','하체');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'레그 프레스','하체');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'레그 컬','하체');

insert into exercise (exerciseId,`title`,`part`)VALUES (0,'해머 컬','팔');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'바벨 컬','팔');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'벤치 딥스','팔');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'트라이셉스 푸시 다운','팔');
insert into exercise (exerciseId,`title`,`part`)VALUES (0,'트라이셉스 익스텐션','팔');


CREATE TABLE IF NOT EXISTS `ssafit`.`video` (
  `title` VARCHAR(100) NOT NULL,
  `part` VARCHAR(45) NOT NULL,
  `youtubeId` VARCHAR(100) NOT NULL,
  `channelName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`title`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
