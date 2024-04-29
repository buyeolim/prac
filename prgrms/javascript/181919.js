/*
콜라츠 수열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181919
 */

function solution(n) {
  const answer = [n];

  while (n > 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    answer.push(n);
  }

  return answer;
}

const input = [10];

console.log(solution(...input));
