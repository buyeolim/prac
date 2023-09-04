/*
조회수가 가장 많은 중고거래 게시판의 첨부파일 조회하기
https://school.programmers.co.kr/learn/courses/30/lessons/164671
 */

SELECT CONCAT('/home/grep/src/', b.board_id, '/', f.file_id, f.file_name, f.file_ext) AS file_path
FROM used_goods_file AS f 
JOIN (
    SELECT *
    FROM used_goods_board
    ORDER BY views DESC 
    LIMIT 1
) AS b ON f.board_id = b.board_id
ORDER BY f.file_id DESC;