/*
중복 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/59408
 */

SELECT COUNT(DISTINCT name)
FROM animal_ins
WHERE name IS NOT NULL;