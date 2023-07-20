/*
흉부외과 또는 일반외과 의사 목록 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/132203
 */

SELECT dr_name, dr_id, mcdp_cd, DATE_FORMAT(hire_ymd, '%Y-%m-%d') AS hire_ymd
    FROM doctor
    WHERE mcdp_cd IN ('CS', 'GS')
    ORDER BY hire_ymd DESC, dr_name ASC