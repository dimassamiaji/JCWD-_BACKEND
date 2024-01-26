use Purwadhika_Branch;

create table Students(
id integer, 
branch_name varchar(30) not null, 
pic varchar(30) not null, 
address varchar(100) not null, 
city varchar(50) not null, 
province varchar(50) not null
);

insert into Students(id,branch_name,pic,address,city,province) values(1,'BSD','THOMAS','GREEN OFFICEPARK 9','BSD','TANGERANG'); 
insert into Students(id,branch_name,pic,address,city,province) values(2,'JKT','BUDI','MSIG TOWER','JAKARTA SELATAN','JAKARTA');
insert into Students(id,branch_name,pic,address,city,province) values(2,'BTM','ANGEL','NONGSA','BATAM','KEP. RIAU');
SET SQL_SAFE_UPDATES = 0;
update Students set pic  = 'DONO' where city = 'BSD';
insert into Students(id,branch_name,pic,address,city,province) values(2,'BLI','TONO','GIANYAR','GIANYAR','BALI');