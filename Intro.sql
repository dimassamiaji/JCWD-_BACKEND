CREATE DATABASE db_purwadhika; -- create database
create database db_contoh;

SHOW DATABASES; -- show all databases
show create database db_purwadhika; -- log create database

use db_purwadhika; -- menggunakan database purwadhika

drop database db_contoh; -- delete database

create table students(name varchar(30) not null, marks Integer);

alter table students add address varchar(100) not null;

create table contoh(contoh varchar(255)); -- create table contoh
drop table contoh; -- hapus table contoh

insert into students(name,marks, address) values('ikmal', 100, 'di jakarta'); 
insert into students(name,marks, address) values('Akmil', 80, 'di jakarta'); 
insert into students(name,marks, address) values('Akmal', 90, 'di jakarta'); 
insert into students(name,marks, address) values('Ikmul', 55, 'Jakarta'); 

update students set address = 'Jakarta' where name = 'ikmal';
update students set address = 'Bekasi' where name = 'Akmil';
update students set address = 'Tangerang' where name = 'Akmal';
update students set name  = 'Ikmal' where name = 'ikmal';

select * from students where address = 'Jakarta' and marks > 50;
select * from students where address = 'Jakarta' or marks > 50;
select * from students where address = 'Jakarta' or address = 'Tangerang';

alter table students rename column address to alamat; -- ubah data pada column 

select distinct address from students; 
select count(name) total_student, address from students group by address;
select avg(marks) avg_marks_student, address from students group by address;

select * from students where name like '%a%'; -- nama diawali atau diakhiri dengan a
select * from students where name like '%ef'; -- nama diakhiri dengan ef 
select * from students where name like 'ik%'; -- nama diawali dengan ik

select * from students order by name desc; -- sort student by name descending
select * from students order by marks; -- sort student by marks ascending

select count(name), alamat from students where name like '%i%' group by alamat;
select count(name), alamat from students group by alamat;

select count(name) total, alamat from students group by alamat having total = 2;

select name,alamat,marks as nilai from students where marks > 50 group by name,alamat,marks;
select name,alamat,marks as nilai from students group by name,alamat,marks having marks > 50 ;

select * from students;
select * from students limit 2 offset 0; 
select * from students limit 2 offset 2;


CREATE TABLE Persons (
	Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);

insert into Persons(LastName,FirstName,Age) values("Uzumaki", "Wowo", 59);
insert into Persons(LastName,FirstName,Age) values("Uchiha", "Gibski", 37);

select * from Persons;

drop table persons;



select * from students; -- select all columns in table students
select name from students; -- select column name in table students
-- accessing table/database create,alter,drop,show
-- accessing data insert,update,delet,select

set sql_safe_updates = 0; -- disable safe_updates

delete from students where name = 'ikmal'; -- menghapus data students yang namanya adalah ikmal

