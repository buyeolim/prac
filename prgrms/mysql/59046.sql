/*
루시와 엘라 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/59046
 */

SELECT animal_id, name, sex_upon_intake
FROM animal_ins
WHERE name = 'Lucy' 
    OR name = 'Ella'
    OR name = 'Pickle'
    OR name = 'Rogan'
    OR name = 'Sabrina'
    OR name = 'Mitty'
GROUP BY animal_id
ORDER BY animal_id ASC;