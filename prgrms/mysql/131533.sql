/*
상품 별 오프라인 매출 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/131533
 */

SELECT p.product_code AS product_code, SUM(p.price * o.sales_amount) AS sales
FROM product AS p
JOIN offline_sale AS o ON p.product_id = o.product_id
GROUP BY p.product_id
ORDER BY sales DESC, product_code ASC;