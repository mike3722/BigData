*/psql -u postgres -h localhost

create database biddata_ca1_michael_pisani;

CREATE TABLE movies( title text PRIMARY KEY, writer text ,year INT,actors text[] , franchise text);
 
INSERT INTO movies(title,writer,year,actors,franchise) VALUES 
	   ('Fight Club ', 'Chuck Palahniuk ', 1999, Array['Brad Pitt','Edward Norton'], null),
	   ('Pulp Fiction', 'Quentin Tarantino',1994,ARRAY['John Travolta','Uma Thurman'],null),
	   ('Inglorious Basterds', 'Quentin Tarantino',2009,ARRAY['Brad Pitt','Diane Kruger','Eli Roth'],null),
	   ('The Hobbit: An Unexpected Journey', 'J.R.R. Tolkein ',2012,null,'The Hobbit'),
	   ('The Hobbit: The Desolation of Smaug', 'J.R.R. Tolkein ',2013,null,'The Hobbit'),
	   ('The Hobbit: The Battle of the Five Armies', 'J.R.R. Tolkein ',2012,null,'The Hobbit'),
	   ('Pee Wee Hermans Big Adventure'  ,null,null,null,null),
	   ('Avatar'  ,null,null,null,null);
	   
SELECT * from movies;
SELECT * FROM movies WHERE writer='Quentin Tarantino';

/*  NOT WORKING */
SELECT * FROM movies WHERE  actors LIKE ('Brad Pit');


SELECT * FROM movies WHERE  franchise LIKE '%The Hobbit%';
SELECT * FROM movies WHERE year <2000 OR year>2010;

ALTER TABLE movies ADD synopsis text;

Update movies 
Set synopsis = 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
where title = 'The Hobbit: An Unexpected Journey';

update movies
set synopsis ='The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
where title = 'The Hobbit: The Desolation of Smaug';

SELECT * FROM movies WHERE synopsis LIKE '%Bilbo%';
SELECT * FROM movies WHERE synopsis LIKE '%Gandalf%';
SELECT * FROM movies WHERE synopsis LIKE '%Bilbo%' and synopsis not LIKE '%Gandalf%';

DELETE FROM movies WHERE title = 'Pee Wee Hermans Big Adventure';
DELETE FROM movies WHERE title = 'Avatar';

CREATE TABLE users(username text PRIMARY KEY,firstname text,lastname text);
INSERT INTO  users(username,firstname,lastname)VALUES 
('GoodGuyGreg','Good Guy','Greg'),
('ScumbagSteve','Scumbag','Steve'); 
Select * from users;

CREATE TABLE posts(objid SERIAL,username text,title text,body text,FOREIGN KEY (username) REFERENCES users (username));
INSERT INTO posts(username,title,body) VALUES
('GoodGuyGreg','Passes out at party','Wakes up early and cleans house'),
('GoodGuyGreg','Steals your identity','Raises your credit score'),
('GoodGuyGreg','Reports a bug in your code','Sends you a Pull Request'),
('ScumbagSteve','Borrows something','Sells it'),
('ScumbagSteve','Borrows everything','The end'),
('ScumbagSteve','Forks your repo on github','Sets to private');
SELECT * from posts; 

CREATE TABLE comments(username text, comment text, post int,FOREIGN KEY (username) REFERENCES users (username));

INSERT INTO comments(username,comment,post)VALUES
('GoodGuyGreg','Hope you got a good deal!',(SELECT objid from posts where title ='Borrows something')),
('GoodGuyGreg','Whats mine is yours!',(SELECT objid from posts where title ='Borrows everything')),
('GoodGuyGreg','Dont violate the licensing agreement!',(SELECT objid from posts where title = 'Forks your repo on github')),
('ScumbagSteve','It still isnt clean',(SELECT objid from posts where title ='Passes out at party')),
('ScumbagSteve','Denied your PR cause I found a hack ',(SELECT objid from posts where title ='Reports a bug in your code'));
SELECT * from comments;

Select * from posts where username = 'GoodGuyGreg';
Select * from posts where username = 'ScumbagSteve';
Select * from comments where post = Select * from posts where title='Reports a bug in your code';

select * from comments inner join posts on comments.post = posts.objid where posts.title = 'Reports a bug in your code';



