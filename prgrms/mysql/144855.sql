/*
카테고리 별 도서 판매량 집계하기
https://school.programmers.co.kr/learn/courses/30/lessons/144855
 */

SELECT b.category, SUM(s.sales) AS total_sales
FROM book AS b
JOIN book_sales AS s ON b.book_id = s.book_id
WHERE MONTH(s.sales_date) = 1 AND YEAR(s.sales_date) = 2022
GROUP BY b.category
ORDER BY b.category ASC;