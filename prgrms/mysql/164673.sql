/*
조건에 부합하는 중고거래 댓글 조회하기
https://school.programmers.co.kr/learn/courses/30/lessons/164673
 */

SELECT 
    b.title,
    b.board_id,
    r.reply_id,
    r.writer_id,
    r.contents,
    DATE_FORMAT(r.created_date, '%Y-%m-%d') AS created_date
FROM used_goods_board AS b
INNER JOIN used_goods_reply AS r
ON b.board_id = r.board_id
WHERE YEAR(b.created_date) = 2022 AND MONTH(b.created_date) = 10
ORDER BY r.created_date ASC, b.title ASC