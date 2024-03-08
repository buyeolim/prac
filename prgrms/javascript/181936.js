/*
공배수
https://school.programmers.co.kr/learn/courses/30/lessons/181936
 */

function solution(number, n, m) {
  const answer = !(number % n) && !(number % m) ? 1 : 0;

  return answer;
}

const input = [60, 2, 3];
// const input = [55, 10, 5];

console.log(solution(...input));
