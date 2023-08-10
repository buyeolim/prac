/*
카테고리 별 상품 개수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/131529
 */

SELECT LEFT(product_code, 2) AS category,
    COUNT(*) AS products
FROM product
GROUP BY category;