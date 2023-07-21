/*
12세 이하인 여자 환자 목록 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/132201
 */

SELECT pt_name, pt_no, gend_cd, age, IFNULL(tlno, 'NONE') AS tlno
    FROM patient
    WHERE age <= 12 AND gend_cd = 'W'
    ORDER BY age DESC, pt_name ASC