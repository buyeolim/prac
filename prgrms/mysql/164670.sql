/*
조건에 맞는 사용자 정보 조회하기
https://school.programmers.co.kr/learn/courses/30/lessons/164670
 */

SELECT
    user_id,
    nickname,
    CONCAT_WS(' ',
        city,
        street_address1,
        street_address2
    ) AS 전체주소,
    CONCAT_WS(
        '-',
        SUBSTRING(tlno, 1, 3),
        SUBSTRING(tlno, 4, 4),
        SUBSTRING(tlno, 8, 4)
    ) AS 전화번호
FROM used_goods_user AS u
JOIN used_goods_board AS b ON u.user_id = b.writer_id
GROUP BY u.user_id
HAVING COUNT(u.user_id) >= 3
ORDER BY user_id DESC;