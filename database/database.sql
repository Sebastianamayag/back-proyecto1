CREATE DATABASE AcademiaLaVictoria;

CREATE TABLE Users(
 id SERIAL PRIMARY KEY,
 name VARCHAR(40),
 role TEXT,
 canAccess BOOLEAN
);

INSERT INTO users(name,role,canAccess) 
VALUES ('camilo','admon',true),
	('sebastian','estudent',false);
