/*
없어진 기록 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/59042
 */

SELECT o.animal_id, o.name
FROM animal_outs AS o
LEFT JOIN animal_ins AS i ON o.animal_id = i.animal_id
WHERE i.animal_id IS NULL
ORDER BY o.animal_id;