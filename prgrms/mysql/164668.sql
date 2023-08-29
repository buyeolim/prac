/*
조건에 맞는 사용자와 총 거래금액 조회하기
https://school.programmers.co.kr/learn/courses/30/lessons/164668
 */

SELECT u.user_id, u.nickname, SUM(g.price) AS total_sales
FROM used_goods_board AS g
JOIN used_goods_user AS u ON g.writer_id = u.user_id
WHERE g.status = 'DONE'
GROUP BY user_id
HAVING total_sales >= 700000
ORDER BY total_sales ASC;