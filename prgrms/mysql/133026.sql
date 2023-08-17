/*
성분으로 구분한 아이스크림 총 주문량
https://school.programmers.co.kr/learn/courses/30/lessons/133026
 */

SELECT i.ingredient_type, SUM(total_order) AS total_order
FROM first_half AS f
JOIN icecream_info AS i ON f.flavor = i.flavor
GROUP BY i.ingredient_type
ORDER BY total_order ASC;