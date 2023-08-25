/*
오랜 기간 보호한 동물(2)
https://school.programmers.co.kr/learn/courses/30/lessons/59411
 */

SELECT i.animal_id, i.name
FROM animal_ins AS i
JOIN animal_outs AS o ON i.animal_id = o.animal_id
ORDER BY DATEDIFF(o.datetime, i.datetime) DESC
LIMIT 2;