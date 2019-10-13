CREATE DATABASE treefile

CREATE TABLE files
(
  id serial NOT NULL,
  type character varying NOT NULL,
  filename character varying NOT NULL,
  parentid integer NOT NULL,
  PRIMARY KEY (id)
);



-- ALTER TABLE files DROP COLUMN filename;
--
-- ALTER TABLE files
-- RENAME COLUMN text TO filename;