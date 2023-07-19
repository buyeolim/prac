/*
조건에 맞는 회원수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/131535
 */

SELECT COUNT(*) AS users
    FROM user_info
    WHERE YEAR(joined) = 2021 AND age BETWEEN 20 AND 29