use sakila;

SELECT country_id, country
FROM country
WHERE country IN ('China', 'Bangladesh', 'India');

SELECT *
FROM actor
WHERE last_name LIKE '%OD%'
ORDER BY last_name, first_name;

ALTER TABLE actor
ADD COLUMN middle_name VARCHAR(50) AFTER first_name;

SELECT last_name, COUNT(*) AS actor_count
FROM actor
GROUP BY last_name
HAVING COUNT(*) >= 2;

SELECT staff.first_name, staff.last_name, address.address
FROM staff
JOIN address ON staff.address_id = address.address_id;

SELECT COUNT(*) AS copy_count
FROM film
JOIN inventory ON film.film_id = inventory.film_id
WHERE film.title = 'Hunchback Impossible';

SELECT film.title, COUNT(rental.rental_id) AS rental_count
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
GROUP BY film.title
ORDER BY rental_count DESC limit 1;

SELECT s.store_id, c.city, ct.country FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city c ON ct.city_id = a.city_id
JOIN country ct ON c.country_id = ct.country_id;

SELECT actor_id, first_name, last_name
FROM actor
WHERE actor_id IN (SELECT actor_id FROM film_actor WHERE film_id IN (SELECT film_id FROM film WHERE title = 'Alone Trip'));

select * from actor where actor_id in (
select fa.actor_id from film f
join film_actor fa on fa.film_id = f.film_id
where f.title = 'Alone Trip');

ALTER TABLE actor
DROP COLUMN middle_name;
