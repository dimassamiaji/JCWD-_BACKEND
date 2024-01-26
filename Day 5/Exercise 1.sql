create database Purwadhika_Student;
create database Purwadhika_Schedule;
create database Purwadhika_Branch;

show databases like '%Purwadhika%';

drop database purwadhika_Schedule;


use Purwadhika_Student;
create table Students(id integer, last_name varchar(30) not null, first_name varchar(30) not null, address varchar(100) not null, city varchar(100) not null); 
drop table Students;

alter table Students add Email varchar(50) not null;

alter table Students add gender varchar(30), add batch_code int, add phone_number varchar(30), add alternative_phone_number varchar(30);

alter table Students change column alternative_phone_number description varchar(255); 

alter table Students drop column gender;