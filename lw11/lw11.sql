CREATE DATABASE lw11;
USE lw11;
CREATE TABLE facult
(
	facult_id INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY(facult_id)
)
	DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE InnoDB
;
CREATE TABLE `group`
(
	group_id INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY(group_id)
)
	DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE InnoDB	
;
CREATE TABLE student
(
	student_id INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    group_id INT NOT NULL,
    facult_id INT NOT NULL,
    PRIMARY KEY(student_id)
)
	DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE InnoDB	
;

INSERT INTO facult SET name = 'First';
INSERT INTO `group` SET facult_id = 1, `name` = 'F1';
INSERT INTO student SET `name` = 'student1', age = 18, group_id = 1, facult_id = 1;
INSERT INTO student SET `name` = 'student2', age = 19, group_id = 1, facult_id = 1;
INSERT INTO student SET `name` = 'student3', age = 19, group_id = 1, facult_id = 1;
INSERT INTO student SET `name` = 'student4', age = 18, group_id = 1, facult_id = 1;
INSERT INTO student SET `name` = 'student5', age = 19, group_id = 1, facult_id = 1;
INSERT INTO `group` SET facult_id = 1, `name` = 'F2';
INSERT INTO student SET `name` = 'student1', age = 19, group_id = 2, facult_id = 1;
INSERT INTO student SET `name` = 'student2', age = 19, group_id = 2, facult_id = 1;
INSERT INTO student SET `name` = 'student3', age = 18, group_id = 2, facult_id = 1;
INSERT INTO student SET `name` = 'student4', age = 19, group_id = 2, facult_id = 1;
INSERT INTO student SET `name` = 'student5', age = 18, group_id = 2, facult_id = 1;
INSERT INTO `group` SET facult_id = 1, `name` = 'F3';
INSERT INTO student SET `name` = 'student1', age = 18, group_id = 3, facult_id = 1;
INSERT INTO student SET `name` = 'student2', age = 19, group_id = 3, facult_id = 1;
INSERT INTO student SET `name` = 'student3', age = 19, group_id = 3, facult_id = 1;
INSERT INTO student SET `name` = 'student4', age = 18, group_id = 3, facult_id = 1;
INSERT INTO student SET `name` = 'student5', age = 18, group_id = 3, facult_id = 1;

INSERT INTO facult SET name = 'Second';
INSERT INTO `group` SET facult_id = 2, `name` = 'S1';
INSERT INTO student SET `name` = 'student1', age = 18, group_id = 4, facult_id = 2;
INSERT INTO student SET `name` = 'student2', age = 19, group_id = 4, facult_id = 2;
INSERT INTO student SET `name` = 'student3', age = 19, group_id = 4, facult_id = 2;
INSERT INTO student SET `name` = 'student4', age = 18, group_id = 4, facult_id = 2;
INSERT INTO student SET `name` = 'student5', age = 19, group_id = 4, facult_id = 2;
INSERT INTO `group` SET facult_id = 2, `name` = 'S2';
INSERT INTO student SET `name` = 'student1', age = 19, group_id = 5, facult_id = 2;
INSERT INTO student SET `name` = 'student2', age = 19, group_id = 5, facult_id = 2;
INSERT INTO student SET `name` = 'student3', age = 18, group_id = 5, facult_id = 2;
INSERT INTO student SET `name` = 'student4', age = 19, group_id = 5, facult_id = 2;
INSERT INTO student SET `name` = 'student5', age = 18, group_id = 5, facult_id = 2;
INSERT INTO `group` SET facult_id = 2, `name` = 'S3';
INSERT INTO student SET `name` = 'student1', age = 18, group_id = 6, facult_id = 2;
INSERT INTO student SET `name` = 'student2', age = 19, group_id = 6, facult_id = 2;
INSERT INTO student SET `name` = 'student3', age = 19, group_id = 6, facult_id = 2;
INSERT INTO student SET `name` = 'student4', age = 18, group_id = 6, facult_id = 2;
INSERT INTO student SET `name` = 'student5', age = 18, group_id = 6, facult_id = 2;

INSERT INTO facult SET name = 'Third';
INSERT INTO `group` SET facult_id = 3, `name` = 'T1';
INSERT INTO student SET `name` = 'student1', age = 23, group_id = 7, facult_id = 3;
INSERT INTO student SET `name` = 'student2', age = 25, group_id = 7, facult_id = 3;
INSERT INTO student SET `name` = 'student3', age = 22, group_id = 7, facult_id = 3;
INSERT INTO student SET `name` = 'student4', age = 30, group_id = 7, facult_id = 3;
INSERT INTO student SET `name` = 'student5', age = 24, group_id = 7, facult_id = 3;
INSERT INTO `group` SET facult_id = 3, `name` = 'T2';
INSERT INTO student SET `name` = 'student1', age = 30, group_id = 8, facult_id = 3;
INSERT INTO student SET `name` = 'student2', age = 24, group_id = 8, facult_id = 3;
INSERT INTO student SET `name` = 'student3', age = 26, group_id = 8, facult_id = 3;
INSERT INTO student SET `name` = 'student4', age = 29, group_id = 8, facult_id = 3;
INSERT INTO student SET `name` = 'student5', age = 24, group_id = 8, facult_id = 3;
INSERT INTO `group` SET facult_id = 3, `name` = 'T3';
INSERT INTO student SET `name` = 'student1', age = 24, group_id = 9, facult_id = 3;
INSERT INTO student SET `name` = 'student2', age = 21, group_id = 9, facult_id = 3;
INSERT INTO student SET `name` = 'student3', age = 29, group_id = 9, facult_id = 3;
INSERT INTO student SET `name` = 'student4', age = 23, group_id = 9, facult_id = 3;
INSERT INTO student SET `name` = 'student5', age = 30, group_id = 9, facult_id = 3;

SELECT
	student_id AS "id",
    name,
    age
FROM
	student
WHERE
	age = 19;

SELECT
	student.name AS "StudentName",
    `group`.name AS "GroupName"
FROM
	`group` JOIN student ON `group`.group_id=2;
    
SELECT
	student.name AS "StudentName",
    facult.name AS "FacultName"
FROM
	facult JOIN student ON facult.facult_id=1;

SELECT
	student.name AS "StudentName",
    facult.name AS "FacultName",
    `group`.name AS "GroupName"
FROM
	student JOIN facult ON facult.facult_id=student.facult_id AND student.student_id=1
    JOIN `group` ON `group`.group_id=student.group_id;