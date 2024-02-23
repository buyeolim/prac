/*
n의 배수 고르기
https://school.programmers.co.kr/learn/courses/30/lessons/120905
 */

function solution(n, numlist) {
  const answer = numlist.filter((v) => !(v % n));

  return answer;
}

const input = [3, [4, 5, 6, 7, 8, 9, 10, 11, 12]];
// const input = [5, [1, 9, 3, 10, 13, 5]];
// const input = [12, [2, 100, 120, 600, 12, 12]];

console.log(solution(...input));
