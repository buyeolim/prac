/*
즐겨찾기가 가장 많은 식당 정보 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/131123
 */

SELECT r.food_type, r.rest_id, r.rest_name, r.favorites
FROM rest_info AS r
JOIN (
    SELECT food_type, MAX(favorites) AS max_favorites
    FROM rest_info
    GROUP BY food_type
) AS sub ON r.food_type = sub.food_type AND r.favorites = sub.max_favorites
ORDER BY food_type DESC;