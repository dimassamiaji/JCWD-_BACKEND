use world;
select * from city;
select * from country;
select * from countrylanguage;

select * from country order by population desc limit 1;
select *from country order by population desc limit 1 offset 1;
select * from country where population > 0 order by population asc limit 1;
select * from country where population > 0 order by population asc limit 1 offset 1;
select continent from country where lifeexpectancy > 75 group by continent order by sum(surfacearea) desc limit 1;