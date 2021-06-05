CREATE DATABASE lw11;
USE lw11;

CREATE TABLE faculties
(
    id                INT AUTO_INCREMENT NOT NULL,
    faculty           VARCHAR(255)       NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;

CREATE TABLE groups
(
    id                INT AUTO_INCREMENT NOT NULL,
    `group`           VARCHAR(255)       NOT NULL,
    faculty_id        INT                NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;

CREATE TABLE students
(
    id                INT AUTO_INCREMENT NOT NULL,
    first_name        VARCHAR(255)       NOT NULL,
    last_name         VARCHAR(255)       NOT NULL,
    age               INT                NOT NULL,
    group_id          INT                NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;

INSERT INTO faculties SET faculty = 'PS';
INSERT INTO faculties SET faculty = 'BI';
INSERT INTO faculties SET faculty = 'ISA';

INSERT INTO groups SET `group` = 'PS-11', faculty_id = 1;
INSERT INTO groups SET `group` = 'PS-12', faculty_id = 1;
INSERT INTO groups SET `group` = 'PS-13', faculty_id = 1;

INSERT INTO groups SET `group` = 'BI-11', faculty_id = 2;
INSERT INTO groups SET `group` = 'BI-12', faculty_id = 2;
INSERT INTO groups SET `group` = 'BI-13', faculty_id = 2;

INSERT INTO groups SET `group` = 'ISA-11', faculty_id = 3;
INSERT INTO groups SET `group` = 'ISA-12', faculty_id = 3;
INSERT INTO groups SET `group` = 'ISA-13', faculty_id = 3;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 1;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 2;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 3;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 4;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 5;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 6;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 7;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 8;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 9;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 1;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 2;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 3;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 4;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 5;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 6;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 7;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 8;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 9;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 1;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 2;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 3;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 4;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 5;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 6;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 7;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 8;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 9;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 1;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 2;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 3;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 4;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 5;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 6;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 7;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 8;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 9;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 1;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 2;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 3;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 4;

INSERT INTO students SET first_name = 'A',  last_name = 'a', age = 19, group_id = 5;
INSERT INTO students SET first_name = 'B',  last_name = 'b', age = 20, group_id = 6;
INSERT INTO students SET first_name = 'C',  last_name = 'c', age = 18, group_id = 7;
INSERT INTO students SET first_name = 'D',  last_name = 'd', age = 21, group_id = 8;
INSERT INTO students SET first_name = 'E',  last_name = 'e', age = 20, group_id = 9;

SELECT
    first_name,
    last_name AS family_name,
    age AS Age
FROM
    students
WHERE
    students.age = 20;

SELECT
    first_name,
    last_name AS family_name,
    age AS Age,
    `group`
FROM 
    students
    JOIN groups ON students.group_id = groups.id
WHERE
    group_id = 7;
    
SELECT
    first_name,
    last_name AS family_name,
    faculty
FROM 
    students
    JOIN groups ON students.group_id = groups.id 
    JOIN faculties ON groups.faculty_id = faculties.id   
WHERE
    faculty_id = 1;
    
SELECT
    first_name,
    last_name AS family_name,
    age,
    `group`,
    faculty
FROM
    students
    JOIN groups ON students.group_id = groups.id
    JOIN faculties ON groups.faculty_id = faculties.id
WHERE
    students.id = 40;