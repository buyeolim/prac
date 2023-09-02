/*
자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기
https://school.programmers.co.kr/learn/courses/30/lessons/157340
 */

SELECT
    car_id,
    MAX(
        IF(start_date <= '2022-10-16' AND '2022-10-16' <= end_date, '대여중', '대여 가능')
    ) AS availability
FROM car_rental_company_rental_history
GROUP BY car_id ORDER BY car_id DESC;