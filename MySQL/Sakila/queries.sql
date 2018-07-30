SELECT users.first_name, users.last_name, users2.first_name, users2.last_name
FROM users
LEFT JOIN friendships ON friend_1_id = users.id
LEFT JOIN users as users2 ON users2.id = friend_2_id;

/* 1. Return all users who are friends with Kermit, make sure their names are displayed in results. */

SELECT users.first_name, users.last_name, users2.first_name, users2.last_name
FROM users
LEFT JOIN friendships ON friend_1_id = users.id
LEFT JOIN users as users2 ON users2.id = friend_2_id
WHERE users.first_name = 'Kermit' OR users2.first_name = 'Kermit';

/* 2. Return the count of all friendships */

SELECT users.first_name, users.last_name, count(users2.first_name)
FROM users
LEFT JOIN friendships ON friend_1_id = users.id
LEFT JOIN users as users2 ON users2.id = friend_2_id
GROUP BY users.first_name;

/* 3. Find out who has the most friends and return the count of their friends. */

SELECT users.first_name, users.last_name, count(users2.first_name) as num_of_friends
FROM users
LEFT JOIN friendships ON friend_1_id = users.id
LEFT JOIN users as users2 ON users2.id = friend_2_id
GROUP BY users.first_name
ORDER BY num_of_friends DESC LIMIT 1;

/* 4 Create a new user and make them friends with Eli Byers, Kermit The Frog, and Marky Mark */

# Done

SELECT users.first_name, users.last_name, count(users2.first_name) as num_of_friends
FROM users
LEFT JOIN friendships ON friend_1_id = users.id
LEFT JOIN users as users2 ON users2.id = friend_2_id
GROUP BY users.first_name
ORDER BY num_of_friends DESC LIMIT 1;

/* 5. Return the friends of Eli in alphabetical order */

SELECT users.first_name, users2.first_name
FROM users
LEFT JOIN friendships ON friend_1_id = users.id
LEFT JOIN users as users2 ON users2.id = friend_2_id
WHERE users.first_name = 'Eli'
ORDER BY users2.first_name;

/* 6. Remove Marky Marky from Eliâ€™s friends. */

# Done

/* 7. Return all friendships, displaying just the first and last name of both friends */

SELECT users.first_name, users.last_name, users2.first_name, users2.last_name
FROM users
JOIN friendships ON users.id = friend_1_id OR users.id = friend_2_id
JOIN users as users2 ON (users2.id = friend_1_id AND users2.id <> users.id)
OR (users2.id = friend_2_id AND users2.id <> users.id)
ORDER BY 1,2,3,4;