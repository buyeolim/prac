/*
이름에 el이 들어가는 동물 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/59047
 */

SELECT animal_id, name
FROM animal_ins
WHERE animal_type = 'Dog' AND name LIKE '%EL%'
ORDER BY name ASC;