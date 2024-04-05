/*
배열 만들기 1
https://school.programmers.co.kr/learn/courses/30/lessons/181901
 */

function solution(n, k) {
  const answer = Array.from(
    { length: Math.floor(n / k) },
    (_, i) => k * (i + 1)
  );

  return answer;
}

const input = [10, 3];
// const input = [15, 5];

console.log(solution(...input));
