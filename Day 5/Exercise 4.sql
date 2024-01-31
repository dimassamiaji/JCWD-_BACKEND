use sakila;

insert into actor (first_name, last_name) values ('JOHNNY', 'DAVIS');

insert into actor (first_name, last_name) values ('ADAM', 'DAVIS');
insert into actor (first_name, last_name) values ('JEREMY', 'DAVIS');
insert into actor (first_name, last_name) values ('CRAIG', 'DAVIS');
insert into actor (first_name, last_name) values ('STEVE', 'DAVIS');

select count(last_name), last_name from actor where last_name like '%davis%' group by last_name;

SET SQL_SAFE_UPDATES = 0;

delete from sakila.actor where actor_id = 4;


Select * from country;

select p.country_id, p.country, c.active from country p
join customer c on c.active = p.country
where active < 1
order by c.active desc;

select c.country, count(csm.active) inactive_customer from customer csm
join address a on a.address_id = csm.address_id
join city ct on ct.city_id = a.city_id
join country c on c.country_id = ct.country_id
where csm.active = 0
group by c.country
order by inactive_customer desc;





select c.first_name, c.last_name, p.amount, p.payment_date from payment p
join customer c on c.customer_id = p.customer_id and c.first_name = 'KAREN'
where p.amount > 3
order by p.amount desc;

