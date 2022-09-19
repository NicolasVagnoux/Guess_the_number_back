
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
