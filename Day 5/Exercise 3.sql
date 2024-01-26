use sakila;

select first_name, last_name from actor;

select * from actor where first_name like 'JOE%';

select address, district, city_id from address where district in ('California', 'Alberta', 'Mekka');

select count(*) total_actor_wood from actor where last_name = 'WOOD';



