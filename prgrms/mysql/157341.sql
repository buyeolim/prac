/*
대여 기록이 존재하는 자동차 리스트 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/157341
 */

SELECT c.car_id
FROM car_rental_company_car AS c
JOIN car_rental_company_rental_history AS h ON c.car_id = h.car_id
WHERE c.car_type = '세단' AND MONTH(h.start_date) = 10
GROUP BY c.car_id
ORDER BY c.car_id DESC;