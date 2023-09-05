/*
대여 횟수가 많은 자동차들의 월별 대여 횟수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/151139
 */

SELECT MONTH(start_date) AS month, car_id, COUNT(*) AS records
FROM car_rental_company_rental_history
WHERE start_date >= '2022-08-01' AND start_date < '2022-11-01' AND car_id in (
    SELECT car_id
    FROM car_rental_company_rental_history
    WHERE start_date >= '2022-08-01' AND start_date < '2022-11-01'
    GROUP by car_id
    HAVING COUNT(*) >= 5
)
GROUP BY car_id, month
HAVING records > 0
ORDER BY month ASC, car_id DESC;