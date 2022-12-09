-- MySQL
DROP TABLE IF EXISTS `leaderboard`;

CREATE TABLE IF NOT EXISTS `leaderboard` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(150) NOT NULL,
  `score` INT NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO leaderboard (username, avatar, score) 
VALUES('Nico', './assets/avatars/avatar1.png', 8),
('Bob', './assets/avatars/avatar2.png', 12);


-- PostgreSQL
DROP TABLE IF EXISTS leaderboard;

CREATE TABLE IF NOT EXISTS leaderboard (
  id SERIAL NOT NULL,
  username VARCHAR(100) NOT NULL,
  avatar VARCHAR(150) NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY (id));

INSERT INTO leaderboard (username, avatar, score) 
VALUES('Nico', './assets/avatars/avatar1.png', 8),
('Bob', './assets/avatars/avatar2.png', 12),
('John', './assets/avatars/avatar8.png', 14);
