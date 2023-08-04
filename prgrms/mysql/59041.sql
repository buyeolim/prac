/*
동명 동물 수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/59041
 */

SELECT name, COUNT(*) AS count
FROM animal_ins
GROUP BY name
HAVING COUNT(name) > 1
ORDER BY name ASC;