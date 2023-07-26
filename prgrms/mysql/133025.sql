/*
과일로 만든 아이스크림 고르기
https://school.programmers.co.kr/learn/courses/30/lessons/133025
 */

SELECT flavor
    FROM first_half
    WHERE flavor IN (
        SELECT flavor 
            FROM icecream_info
            WHERE ingredient_type = 'fruit_based'
    )
    AND total_order > 3000