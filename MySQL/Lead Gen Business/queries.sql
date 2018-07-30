/* 1. What query would you run to get the total revenue for March of 2012? */

SELECT SUM(amount), date_format(charged_datetime, '%M %Y') AS date FROM billing
WHERE YEAR(charged_datetime) = 2012 AND MONTH(charged_datetime) = 3
GROUP BY date;

/* 2. What query would you run to get total revenue collected from the client with an id of 2? */

SELECT clients.client_id, SUM(amount) 
FROM billing
LEFT JOIN clients ON billing_id = billing.client_id
WHERE clients.client_id = 2
GROUP BY clients.client_id;

/* 3. What query would you run to get all the sites that client=10 owns? */

SELECT clients.client_id, domain_name
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 10;

/* 4. What query would you run to get total # of sites created per month per year for the client with an id of 1? What about for client=20? */

SELECT clients.client_id, COUNT(DATE_FORMAT(created_datetime, '%M %Y')) as num_of_websites,  domain_name, DATE_FORMAT(created_datetime, '%M') as month_created, DATE_FORMAT(created_datetime, '%Y') AS year_created
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 1 OR clients.client_id = 20
GROUP BY clients.client_id, month_created, year_created
ORDER BY clients.client_id;

/* 5. What query would you run to get the total # of leads generated for each of the sites between January 1, 2011 to February 15, 2011? */

SELECT sites.domain_name, count(leads_id), registered_datetime
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE registered_datetime >= '2011-01-01' AND registered_datetime < '2011-02-15'
GROUP BY domain_name;

/* 6. What query would you run to get a list of client names and the total # of leads we've generated for each of our clients between January 1, 2011 to December 31, 2011? */

SELECT clients.first_name, clients.last_name, count(leads_id), registered_datetime
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE registered_datetime >= '2011-01-01' AND registered_datetime < '2011-12-31'
GROUP BY clients.first_name, clients.last_name;

/* 7. What query would you run to get a list of client names and the total # of leads we've generated for each client each month between months 1 - 6 of Year 2011? */

SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name, count(leads_id), DATE_FORMAT(registered_datetime, '%M') as month_created, DATE_FORMAT(registered_datetime, '%Y') AS year_created 
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE registered_datetime >= '2011-01-01' AND registered_datetime < '2011-7-01'
GROUP BY clients.first_name, clients.last_name, month_created, year_created
ORDER BY 1,2;

/* 8. What query would you run to get a list of client names and the total # of leads we've generated for each of our clients' sites between January 1, 2011 to December 31, 2011? 
   Order this query by client id.  Come up with a second query that shows all the clients, the site name(s), and the total number of leads generated from each site for all time. */
   
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name, domain_name, count(leads_id)
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE registered_datetime >= '2011-01-01' AND registered_datetime < '2011-12-31'
GROUP BY domain_name
ORDER BY 1;

SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name, domain_name, count(leads_id)
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
GROUP BY client_name, domain_name
ORDER BY 1;

/* 9. Write a single query that retrieves total revenue collected from each client for each month of the year. Order it by client id. */

SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name, SUM(amount), DATE_FORMAT(charged_datetime, '%M') as month_charged, DATE_FORMAT(charged_datetime, '%Y') as year_charged
FROM clients
JOIN billing ON clients.client_id = billing.client_id
GROUP BY client_name, month_charged, year_charged
ORDER BY client_name, 4, MONTH(charged_datetime);

/* 10. Write a single query that retrieves all the sites that each client owns. Group the results so that each row shows a new client. 
   It will become clearer when you add a new field called 'sites' that has all the sites that the client owns. (HINT: use GROUP_CONCAT) */
   
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name, GROUP_CONCAT(domain_name, ' / ')
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
GROUP BY client_name
ORDER BY client_name;
