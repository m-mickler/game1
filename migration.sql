DROP TABLE IF EXISTS players;

CREATE TABLE players (
  username TEXT UNIQUE,
  highscore INT
);

INSERT INTO players(username, highscore) VALUES('matt', 0);