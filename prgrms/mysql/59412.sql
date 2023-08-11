/*
조건에 부합하는 중고거래 댓글 조회하기
https://school.programmers.co.kr/learn/courses/30/lessons/59412
 */

SELECT HOUR(datetime) as hour, COUNT(*) as count
FROM animal_outs
GROUP BY hour
HAVING hour >= 9 AND hour <= 19 
ORDER BY hour;