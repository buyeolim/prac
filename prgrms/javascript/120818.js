/*
옷가게 할인 받기
https://school.programmers.co.kr/learn/courses/30/lessons/120818
 */

function solution(price) {
  const answer = Math.floor(
    price *
      (price >= 500000
        ? 0.8
        : price >= 300000
        ? 0.9
        : price >= 100000
        ? 0.95
        : 1)
  );

  return answer;
}

const input = [150000];
// const input = [580000];

console.log(solution(...input));
