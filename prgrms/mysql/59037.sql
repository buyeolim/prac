/*
어린 동물 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/59037
 */

SELECT animal_id, name
    FROM animal_ins
    WHERE NOT intake_condition='Aged'
    ORDER BY animal_id ASC