/*
부족한 금액 계산하기
https://programmers.co.kr/learn/courses/30/lessons/82612
 */
function solution(price, money, count) {
  let answer = -1;

  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  let diff = money - total;
  if (diff >= 0) {
    answer = 0;
  } else {
    answer = Math.abs(diff);
  }

  return answer;
}

const price = 3,
  money = 20,
  count = 4;

console.log(solution(price, money, count));
