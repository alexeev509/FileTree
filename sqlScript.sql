-- CREATE DATABASE treefile

CREATE TABLE files
(
  id serial NOT NULL,
  isdirectory boolean NOT NULL,
  filename character varying NOT NULL,
  parentid integer NOT NULL,
  PRIMARY KEY (id)
)